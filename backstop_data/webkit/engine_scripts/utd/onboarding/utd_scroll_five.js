module.exports = async (page, scenario, vp) => {
  await page.waitForLoadState('load');
  await page.waitForLoadState('networkidle');

  await page.waitForSelector('dialog[open]', { state: 'hidden', timeout: 60000 });

  // Используем универсальный клик
  await page.getByText('Get started', { exact: true }).click();
  await page.waitForTimeout(2500);

  await page.getByRole('button', { name: 'Page 5' }).click();
  await page.waitForTimeout(5000);
};