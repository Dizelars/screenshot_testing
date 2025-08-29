module.exports = async (page, scenario, vp) => {
  await page.addStyleTag({
    content: `
      section#water_patrol {
        height: 627px !important;
      }
      section::before,
      section::after {
        display: none !important;
        content: none !important;
      }
    `
  });
};