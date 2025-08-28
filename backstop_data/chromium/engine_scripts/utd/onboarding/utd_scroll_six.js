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
  // await clickWhenReady(page, 'text=Get started', 10000);
  await page.getByText('Get started', { exact: true }).click();
  await page.waitForTimeout(2500);

  // await clickWhenReady(page, { role: 'button', name: 'Page 6' });
  await page.getByRole('button', { name: 'Page 6' }).click();
  await page.waitForTimeout(5000);
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
