import json
import requests
from flask import Request, jsonify

# Константы
AMOCRM_BASE_URL = "https://meruestate.amocrm.ru"
ACCESS_TOKEN    = <YOUR_ACCESS_TOKEN>

# ID воронки и статуса
PIPELINE_ID = 8118410
STATUS_ID   = 70469538

# ID кастомных полей
FIELD_WERE_ON_PHUKET = 875761
FIELD_BUDGET         = 880569

def create_lead(request: Request):
    """
    Google Cloud Function для создания сделки и контакта в AmoCRM.
    Входящие данные: JSON с ключами "name", "were_on_phuket", "budget_range", "phone", "email".
    """
    try:
        # Проверяем входящие данные
        request_json = request.get_json(silent=True)
        if not request_json:
            return jsonify({"error": "Invalid request payload"}), 400

        # Извлечение параметров
        name = request_json.get("name", "Новый пользователь")
        were_on_phuket = request_json.get("were_on_phuket", "Нет")
        budget_range = request_json.get("budget_range", "Не указан")
        phone = request_json.get("phone")
        email = request_json.get("email")

        if not phone and not email:
            return jsonify({"error": "Phone or email is required to create a contact"}), 400

        # Формируем данные для создания контакта
        contact_data = {
            "name": name,
            "custom_fields_values": []
        }

        if phone:
            contact_data["custom_fields_values"].append({
                "field_code": "PHONE",
                "values": [{"value": phone, "enum_code": "WORK"}]
            })

        if email:
            contact_data["custom_fields_values"].append({
                "field_code": "EMAIL",
                "values": [{"value": email, "enum_code": "WORK"}]
            })

        # Заголовки запроса
        headers = {
            "Authorization": f"Bearer {ACCESS_TOKEN}",
            "Content-Type": "application/json"
        }

        # Создаём контакт
        contact_response = requests.post(
            f"{AMOCRM_BASE_URL}/api/v4/contacts",
            headers=headers,
            json=[contact_data]  # AmoCRM ожидает массив данных
        )

        if contact_response.status_code not in [200, 201]:
            return jsonify({
                "error": contact_response.json(),
                "status_code": contact_response.status_code
            }), contact_response.status_code

        contact_id = contact_response.json()['_embedded']['contacts'][0]['id']

        # Формируем данные сделки
        deal_data = {
            "name": "Заявка с сайта",
            "pipeline_id": PIPELINE_ID,
            "status_id": STATUS_ID,
            "contacts_id": [contact_id],
            "custom_fields_values": [
                {
                    "field_id": FIELD_WERE_ON_PHUKET,
                    "values": [{"value": were_on_phuket}]
                },
                {
                    "field_id": FIELD_BUDGET,
                    "values": [{"value": budget_range}]
                }
            ]
        }

        # Создаём сделку
        deal_response = requests.post(
            f"{AMOCRM_BASE_URL}/api/v4/leads",
            headers=headers,
            json=[deal_data]
        )

        # Обрабатываем ответ по сделке
        if deal_response.status_code in [200, 201]:
            return jsonify({"success": True, "data": deal_response.json()}), 201
        else:
            return jsonify({
                "error": deal_response.json(),
                "status_code": deal_response.status_code
            }), deal_response.status_code

    except Exception as e:
        return jsonify({"error": str(e)}), 500
