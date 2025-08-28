# Скриншотное тестирование

### Клонирование проекта

1. Создайте пустую папку на своем устройстве
2. Откройте папку при помощи <a href="https://code.visualstudio.com" target="_blank"><b>VS Code</b></a>
3. Откройте терминал
4. Введите команду:
    ```javascript
    git clone https://github.com/Dizelars/screenshot_testing.git
    ```

### Установка проекта

1. Открываем терминал

2. Переходим в папку screenshot_testing
    ```javascript
    cd screenshot_testing
    ```

3. Устанавливаем пакеты при помощи команды:
    ```javascript
    npm i
    ``` 
4. Запуск тестов:
 [!Примечание]
 Перед использованием отключите vpn.
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

### Полезные ссылки

- Для тестирования используется <a href="https://github.com/garris/BackstopJS" target="_blank"><b>BackstopJS</b></a>
- Команды прописываем при помощи <a href="https://playwright.dev" target="_blank"><b>Playwright</b></a>