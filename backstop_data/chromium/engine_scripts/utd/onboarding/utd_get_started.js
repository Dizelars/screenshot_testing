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

  // const dialogSelector = 'dialog[open]';
  // try {
  //   // Пытаемся дождаться появления диалога
  //   await page.waitForSelector(dialogSelector, { state: 'visible', timeout: 60000 });

  //   // Если появился → ждем скрытия
  //   await page.waitForSelector(dialogSelector, { state: 'hidden', timeout: 100000 });
  //   console.log('✅ Диалог появился и исчез, продолжаем');
  // } catch (e) {
  //   if (e.name === 'TimeoutError') {
  //     console.log('⚠️ Диалог не появился, делаем скриншот и идем дальше');
  //     await page.screenshot({ path: `no_dialog_${Date.now()}.png`, fullPage: true });
  //   } else {
  //     console.error('❌ Ошибка при работе с диалогом:', e);
  //     await page.screenshot({ path: `dialog_error_${Date.now()}.png`, fullPage: true });
  //     throw e; // тест падает
  //   }
  // }

  // await clickWhenReady(page, 'text=Get started', 10000);
  await page.waitForTimeout(5000);
  await page.getByText('Get started', { exact: true }).click();
  await page.waitForTimeout(2500);
};

// Функция для клика
// async function clickWhenReady(page, selectorOrOptions, timeout = 10000) {
//   try {
//     let el;

//     if (typeof selectorOrOptions === 'string') {
//       // Обычный селектор
//       el = page.locator(selectorOrOptions);
//     } else if (typeof selectorOrOptions === 'object' && selectorOrOptions.role) {
//       // Поиск через getByRole
//       el = page.getByRole(selectorOrOptions.role, { name: selectorOrOptions.name });
//     } else {
//       throw new Error('Некорректный параметр для clickWhenReady');
//     }

//     await el.waitFor({ state: 'visible', timeout });
//     await el.scrollIntoViewIfNeeded();
//     await el.click({ force: true });

//     console.log(`✅ Клик по элементу "${JSON.stringify(selectorOrOptions)}" выполнен`);
//   } catch {
//     console.log(`⚠️ Элемент "${JSON.stringify(selectorOrOptions)}" не появился за ${timeout / 1000} сек. Пропускаем клик.`);
//   }
// }