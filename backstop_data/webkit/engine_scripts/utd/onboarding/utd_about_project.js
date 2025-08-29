module.exports = async (page, scenario, vp) => {
  // Ждем, пока страница загрузится
  await page.waitForLoadState('load');

  // Ждем, пока сеть успокоится
  await page.waitForLoadState('networkidle');

  await page.waitForSelector('dialog[open]', { state: 'hidden', timeout: 60000 });

  await page.getByText('Get started', { exact: true }).click();
  await page.waitForTimeout(2500);

  // Ждём появления кнопки "About the project" и кликаем
  await page.getByText('About the project', { exact: true }).click();
  await page.waitForTimeout(2500);
};