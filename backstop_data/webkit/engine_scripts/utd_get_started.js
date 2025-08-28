// module.exports = async (page, scenario, vp) => {
//   console.log("SCENARIO >", scenario.label);

//   // Клик по бургеру
//   await page.click('.mui-uz3euc');

//   // Небольшая задержка для анимации
//   await new Promise(resolve => setTimeout(resolve, 2000));
// };

module.exports = async (page, scenario, vp) => {
  // console.log("SCENARIO >", scenario.label);

  // Ждём появления копки "Get started"
  // await page.waitForSelector('.mui-uz3euc', { state: 'visible', timeout: 15000 });
  // await page.click('.mui-uz3euc');

  // await page.locator('text=Get started').click();
  await page.waitForTimeout(3000);

  await page.locator('text=Get started').locator('..').click({ force: true });

  // Небольшая задержка для анимации меню
  await page.waitForTimeout(5000);
};