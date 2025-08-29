module.exports = async (page, scenario, vp) => {
  // Ждем, пока страница загрузится
  await page.waitForLoadState('load');

  // Ждем, пока сеть успокоится
  await page.waitForLoadState('networkidle');

  const dialogSelector = 'dialog[open]';

  try {
    // 1. Ждём, появится ли диалог (до 30 сек)
    await page.waitForSelector(dialogSelector, { state: 'visible', timeout: 30000 });
    console.log('👀 Dialog появился.');

    // 2. Если появился — ждём, пока исчезнет (до 30 сек)
    try {
      await page.waitForSelector(dialogSelector, { state: 'hidden', timeout: 30000 });
      console.log('✅ Dialog исчез, продолжаем.');
    } catch (e) {
      console.log('⚠️ Dialog не исчез за 30 сек, продолжаем с тем, что есть.');
    }

  } catch (e) {
    // Если за 10 сек так и не появился — идём дальше
    console.log('⚠️ Dialog так и не появился, продолжаем.');
  }

  // await page.waitForSelector('dialog[open]', { state: 'hidden', timeout: 60000 });
};