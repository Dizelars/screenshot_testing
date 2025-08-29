module.exports = async (page, scenario, vp) => {
  await page.addStyleTag({
    content: `
      section.main {
        height: 933px !important;
      }
      section::before,
      section::after {
        display: none !important;
        content: none !important;
      }
    `
  });
};