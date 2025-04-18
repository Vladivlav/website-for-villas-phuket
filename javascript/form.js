document.addEventListener("click", function(event) {
    if (event.target.matches(".form-button.active")) {
        event.preventDefault(); // Остановить отправку формы

        const formContainer = event.target.closest(".form-inputs"); // Найти родительский контейнер
        if (!formContainer) return;

        let isValid = true;

        function showError(input, message, type) {
            const errorDiv = input.closest(".input-group").querySelector(".error-message"); // Ошибка сразу под инпутом

            if (message) {
                input.classList.remove("empty", "invalid");
                errorDiv.classList.remove("empty", "invalid");

                if (type === "empty") {
                    input.classList.add("empty");
                    errorDiv.classList.add("empty");
                } else if (type === "invalid") {
                    input.classList.add("invalid");
                    errorDiv.classList.add("invalid");
                }

                errorDiv.textContent = message;
                isValid = false;
            } else {
                input.classList.remove("empty", "invalid");
                errorDiv.classList.remove("empty", "invalid");
                errorDiv.textContent = "";
            }
        }

        const nameInput = formContainer.querySelector("input[placeholder='Ваши Имя и Фамилия']");
        const phoneInput = formContainer.querySelector("input#phone");
        const emailInput = formContainer.querySelector("input[placeholder='Ваш e-mail']");
        const messengerInput = formContainer.querySelector(".form-select span.text");

        const name = nameInput?.value.trim();
        const phone = phoneInput?.value.trim();
        const email = emailInput?.value.trim();
        const messenger = messengerInput?.textContent.trim();

        // Проверка имени
        if (nameInput) {
            if (name === "") {
                showError(nameInput, "Поле обязательное для заполнения", "empty");
            } else if (!/^[А-ЯЁа-яёA-Za-z\s-]+$/.test(name)) {
                showError(nameInput, "Пожалуйста, введите корректные имя и фамилию", "invalid");
            } else {
                showError(nameInput, "", "");
            }
        }

        if (messengerInput) {
            if (messenger === "Как удобнее связаться?") {
                showError(messengerInput, "Поле обязательное для заполнения", "empty");
            } else {
                showError(messengerInput, "", "");
            }
        }

        // Проверка телефона
        if (phoneInput) {
            if (phone === "") {
                showError(phoneInput, "Поле обязательное для заполнения", "empty");
            } else if (!/^\+\d{1,3}[\s\d-]{7,15}$/.test(phone)) {
                showError(phoneInput, "Пожалуйста, введите корректный номер телефона", "invalid");
            } else {
                showError(phoneInput, "", "");
            }
        }

        // Проверка email
        if (emailInput) {
            if (email === "") {
                showError(emailInput, "Поле обязательное для заполнения", "empty");
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                showError(emailInput, "Пожалуйста, введите корректный email-адрес", "invalid");
            } else {
                showError(emailInput, "", "");
            }
        }

        if (isValid) {
            const parent = event.target.closest('#phuket-future-guide, #forms-of-ownerships-guide, #areas-and-beaches-guide');

            let result;
            if (parent) {
                result = document.getElementById('guide-form-result');
            } else {
                result = document.getElementById('popup-form-result');
            }

            const mainSection = event.target.closest('.form, .faq-form, #investments-base, #check-objects, #prices-and-benefits');
            mainSection.style.filter = 'blur(9px)';
            document.querySelector('.loader-wrapper').style.opacity = '1';
            document.querySelector('.loader-wrapper').style.visibility = 'unset';
            setTimeout(() => {
                if (mainSection.classList.contains('faq-form, .form')) {
                    event.target.closest('.form, .faq-form').style.display = 'none';
                }
                mainSection.style.filter = '';
                result.style.display = 'flex';
                document.querySelector('.loader-wrapper').style.opacity = '0';
                document.querySelector('.loader-wrapper').style.visibility = 'hidden';
            }, 500);
        }
    }
});
