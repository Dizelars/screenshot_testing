// module.exports = async (page, scenario, vp) => {
//   console.log("SCENARIO >", scenario.label);

//   // Клик по бургеру
//   await page.click('.mui-uz3euc');
//   await page.click('.mui-1o18jbn');

//   // Небольшая задержка для анимации
//   await new Promise(resolve => setTimeout(resolve, 3000));
// };

module.exports = async (page, scenario, vp) => {
  // console.log("SCENARIO >", scenario.label);

  // // Ждём появления кнопки "Get started" и кликаем
  // const firstBtn = await page.waitForSelector('.mui-uz3euc', { state: 'visible', timeout: 15000 });
  // await firstBtn.click();

  // // Ждём появления кнопки "About the project" и кликаем
  // const secondBtn = await page.waitForSelector('.mui-1o18jbn', { state: 'visible', timeout: 15000 });
  // await secondBtn.click();

  // Ждём появления кнопки "Get started" и кликаем
  // const firstBtn = await page.locator('text=Get started');
  await page.waitForTimeout(3000);

  await page.locator('text=Get started').locator('..').click({ force: true });

  await page.waitForTimeout(3000);

  // Ждём появления кнопки "About the project" и кликаем
  // const secondBtn = await page.locator('text=About the project');
  await page.locator('text=About the project').locator('..').click({ force: true });

  // Небольшая задержка для анимации
  await page.waitForTimeout(5000);
};