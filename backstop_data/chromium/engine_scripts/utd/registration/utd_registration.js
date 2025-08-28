module.exports = async (page, scenario, vp) => {
  await page.waitForLoadState('load');
  await page.waitForLoadState('networkidle');

  // const dialogSelector = 'dialog[open]';

  // try {
  //   await page.waitForSelector(dialogSelector, { state: 'visible', timeout: 30000 });
  //   console.log('👀 Dialog появился.');
  //   try {
  //     await page.waitForSelector(dialogSelector, { state: 'hidden', timeout: 30000 });
  //     console.log('✅ Dialog исчез, продолжаем.');
  //   } catch {
  //     console.log('⚠️ Dialog не исчез за 30 сек, продолжаем с тем, что есть.');
  //   }
  // } catch {
  //   console.log('⚠️ Dialog так и не появился, продолжаем.');
  // }

  await page.waitForSelector('dialog[open]', { state: 'hidden', timeout: 60000 });

  // Используем универсальный клик
  await page.getByText('Sign in', { exact: true }).click();
  await page.waitForTimeout(2500);

  await page.getByText('Sign up', { exact: true }).click();
  await page.waitForTimeout(2500);
};