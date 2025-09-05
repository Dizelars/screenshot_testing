module.exports = async (page, scenario, vp) => {
  // Ждем, пока страница загрузится
  await page.waitForLoadState('load');
  await page.waitForLoadState('networkidle');

  const dialogSelector = 'dialog[open]';
  try {
    // 1. Ждём, появится ли диалог
    await page.waitForSelector(dialogSelector, { state: 'visible', timeout: 40000 });
    console.log('👀 Dialog появился.');

    // 2. Если появился — ждём, пока исчезнет
    try {
      await page.waitForSelector(dialogSelector, { state: 'hidden', timeout: 40000 });
      console.log('✅ Dialog исчез, продолжаем.');
    } catch (e) {
      console.log('⚠️  Dialog не исчез, продолжаем с тем, что есть.');
    }

  } catch (e) {
    console.log('⚠️  Dialog так и не появился, продолжаем.');
  }

  await page.locator('span').getByText('Convenience', { exact: true }).click();
  await page.waitForTimeout(2500);


  // await page.locator('span').getByText('JH', { exact: true }).click();
  // await page.waitForTimeout(2500);

  // await page.getByText('Switch theme', { exact: true }).click();
  // await page.waitForTimeout(2500);

  // await page.locator('span').getByText('JH', { exact: true }).click();
  // await page.waitForTimeout(2500);
};