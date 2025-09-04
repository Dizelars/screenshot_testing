module.exports = async (page, scenario) => {
  // Переходим на страницу логина
  await page.goto("https://urbantransportdata.ru/auth");

  // Вводим данные
  await page.type("#email", "city@utd.com");
  await page.type("#password", "string");

  // Сабмитим форму
  await page.click("button[type=submit]");

  // Ждем редиректа / появления признака авторизации
  await page.waitForNavigation();
};
