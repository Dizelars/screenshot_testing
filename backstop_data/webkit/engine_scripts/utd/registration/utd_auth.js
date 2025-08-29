module.exports = async (page, scenario, vp) => {
  await page.waitForLoadState('load');
  await page.waitForLoadState('networkidle');

  await page.waitForSelector('dialog[open]', { state: 'hidden', timeout: 60000 });

  // Используем универсальный клик
  await page.getByText('Sign in', { exact: true }).click();
  await page.waitForTimeout(2500);
};