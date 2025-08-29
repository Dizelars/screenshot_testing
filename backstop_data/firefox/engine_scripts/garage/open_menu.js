module.exports = async (page, scenario, vp) => {
  console.log("SCENARIO >", scenario.label);

  await page.addStyleTag({
    content: `
      .menu::before,
      .menu::after {
        display: none !important;
        content: none !important;
      }
      .menu {
        height: 936px !important;
      }
    `
  });

  // Клик по бургеру
  await page.click('.burger-menu');

  // Ждем пока меню появится в DOM
  await page.waitForSelector('.menu', { visible: true });

  // Небольшая задержка для анимации
  await new Promise(resolve => setTimeout(resolve, 5000));
};
