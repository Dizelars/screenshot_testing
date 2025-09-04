module.exports = async (page, scenario, vp) => {
  // Ждем, пока страница загрузится
  await page.waitForLoadState('load');
  await page.waitForLoadState('networkidle');

  const dialogSelector = 'dialog[open]';
  try {
    // 1. Ждём, появится ли диалог
    await page.waitForSelector(dialogSelector, { state: 'visible', timeout: 30000 });
    console.log('👀 Dialog появился.');

    // 2. Если появился — ждём, пока исчезнет
    try {
      await page.waitForSelector(dialogSelector, { state: 'hidden', timeout: 30000 });
      console.log('✅ Dialog исчез, продолжаем.');
    } catch (e) {
      console.log('⚠️ Dialog не исчез, продолжаем с тем, что есть.');
    }

  } catch (e) {
    console.log('⚠️ Dialog так и не появился, продолжаем.');
  }

  // Клик в зависимости от разрешения
  if (vp.label === 'desctop') {
    await page.waitForSelector(".mui-1ngnhlg button", { state: "visible" });
    await page.click(".mui-1ngnhlg button:first-of-type svg");
  }

  await page.waitForTimeout(2500);
};