# Скриншотное тестирование :metal:

### Клонирование проекта :smiley_cat:

1. Создайте пустую папку на своем устройстве
2. Откройте папку при помощи **[VS Code](https://code.visualstudio.com)**
3. Откройте терминал
4. Введите команду:

    ```javascript
    git clone https://github.com/Dizelars/screenshot_testing.git
    ```

### Установка проекта :heart_eyes_cat:

> [!NOTE]
> **Перед использованием отключите VPN**

1. Открываем терминал

2. Переходим в папку screenshot_testing командой:
    ```javascript
    cd screenshot_testing
    ```

3. Устанавливаем пакеты при помощи команды:
    ```javascript
    npm i
    ``` 
4. Запуск тестов:
    - UTD (onboarding)
        ```javascript
        npm run test_utd_onboarding:chromium
        ```
        ```javascript
        npm run test_utd_onboarding:firefox
        ```
        ```javascript
        npm run test_utd_onboarding:webkit
        ```
    - UTD (registration)
        ```javascript
        npm run test_utd_registration:chromium
        ```
        ```javascript
        npm run test_utd_registration:firefox
        ```
        ```javascript
        npm run test_utd_registration:webkit
        ```
    - garage
        ```javascript
        npm run test_garage:chromium
        ```
        ```javascript
        npm run test_garage:firefox
        ```
        ```javascript
        npm run test_garage:webkit
        ```

### Полезные ссылки :scream_cat:

- Для тестирования используется **[BackstopJS](https://github.com/garris/BackstopJS)**
- Команды прописываем при помощи **[Playwright](https://playwright.dev)**