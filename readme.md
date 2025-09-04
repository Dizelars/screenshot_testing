# Скриншотное тестирование :metal:

### Клонирование проекта :smiley_cat:

1. Создайте пустую папку на своем устройстве
2. Откройте папку при помощи **[VS Code](https://code.visualstudio.com)**
3. Откройте терминал

![Откройте терминал](/readme_instruction/terminal.png "Откройте терминал")

4. Введите команду:

    ```javascript
    git clone https://github.com/Dizelars/screenshot_testing.git
    ```

> [!TIP]
> **Если установка проекта через git clone у вас не работает, [установите git](https://git-scm.com/downloads) или скачайте проект ZIP-архивом**

![Скачать ZIP-архив](/readme_instruction/github_zip.png "ZIP-архив")

### Установка проекта :heart_eyes_cat:

> [!WARNING]
> **Перед использованием отключите VPN. Если команды npm не работают, то [установите nodejs](https://nodejs.org/en/download)**

1. Открываем терминал (вы в этом уже местер!)

2. Переходим в папку screenshot_testing командой:
    ```javascript
    cd screenshot_testing
    ```

3. Устанавливаем пакеты при помощи команды:
    ```javascript
    npm i
    ``` 
4. Запуск тестов:
    - :purple_heart: UTD (onboarding)

        ```javascript
        npm run test_utd_onboarding:chromium
        ```
        ```javascript
        npm run test_utd_onboarding:firefox
        ```
        ```javascript
        npm run test_utd_onboarding:webkit
        ```
    - :purple_heart: UTD (registration)

        ```javascript
        npm run test_utd_registration:chromium
        ```
        ```javascript
        npm run test_utd_registration:firefox
        ```
        ```javascript
        npm run test_utd_registration:webkit
        ```
    - :purple_heart: UTD (news)

        ```javascript
        npm run test_utd_news:chromium
        ```
        ```javascript
        npm run test_utd_news:firefox
        ```
        ```javascript
        npm run test_utd_news:webkit
        ```
    - :purple_heart: UTD (cities)

        ```javascript
        npm run test_utd_cities:chromium
        ```
        ```javascript
        npm run test_utd_cities:firefox
        ```
        ```javascript
        npm run test_utd_cities:webkit
        ```

5. Для просмотра отчета тестирования, необходимо:
    - Установить в VS Code расширение "Live Server"

    ![Установка Live Server](/readme_instruction/live_server.png "Live Server")

    - Перейти в index.html файл отчета и нажать на кнопку "Go Live" в нижнем правом углу VS Code
    
    ![Отчет Go Live](/readme_instruction/go_live.png "Go Live")

    - Если вы запустили новый тест, и хотите просмотреть его отчет, то по его завершению, сначала отключите текущий сервер кликом по:

    ![Отключить сервер](/readme_instruction/server_off.png "Отключить сервер")

    - И находясь на странице нового отчета, запустите его снова кликом по "Go Live":

    ![Включить сервер](/readme_instruction/server_on.png "Включить сервер")

### Полезные ссылки :scream_cat:

- Для тестирования используется **[BackstopJS](https://github.com/garris/BackstopJS)**
- Команды прописываем при помощи **[Playwright](https://playwright.dev)**
- Установка **[nodejs](https://nodejs.org/en/download)** для работы npm
- Установка **[git](https://git-scm.com/downloads)**