import requests

MAILGUN_API_KEY = <YOUR_MAILGUN_API_KEY>
MAILGUN_DOMAIN  = <YOUR_MAILGUN_DOMAIN>
FROM_EMAIL      s= <YOUR_FROM_EMAIL>

def send_custom_email(request):
    # Добавляем заголовки CORS для всех запросов
    headers = {
        'Access-Control-Allow-Origin': 'https://website-for-villas-phuket.onrender.com',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
    }

    # Обработка preflight-запроса (OPTIONS)
    if request.method == 'OPTIONS':
        return ('', 204, headers)

    # Обработка POST-запроса
    data = request.get_json()
    if not data:
        return ('No JSON body provided', 400, headers)

    mail_type = data.get('type')
    to_email = data.get('to_email')

    templates = {
        'first':  'https://website-for-villas-phuket.onrender.com/mails/first_mail.html',
        'second': 'https://website-for-villas-phuket.onrender.com/mails/second_mail.html',
        'third':  'https://website-for-villas-phuket.onrender.com/mails/third_mail.html',
        'fourth': 'https://website-for-villas-phuket.onrender.com/mails/fourth_mail.html'
    }

    if mail_type not in templates:
        return ('Unknown type', 400, headers)

    if not to_email:
        return ('to_email is required', 400, headers)

    template_url = templates[mail_type]
    resp         = requests.get(template_url)

    if resp.status_code != 200:
        return ('Failed to fetch template', 500, headers)

    html_content = resp.text

    mailgun_url = f"https://api.mailgun.net/v3/{MAILGUN_DOMAIN}/messages"
    auth = ('api', MAILGUN_API_KEY)

    send_data = {
        'from': FROM_EMAIL,
        'to': to_email,
        'subject': 'Send guide',
        'html': html_content
    }

    mail_resp = requests.post(mailgun_url, auth=auth, data=send_data)
    if mail_resp.status_code != 200:
        return (f"Mailgun error: {mail_resp.text}", 500, headers)

    return ('Mail sent', 200, headers)
