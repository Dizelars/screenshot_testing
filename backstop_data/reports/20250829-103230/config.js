report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "..\\..\\..\\bitmaps_reference\\garage\\garage-test_main_section_0_sectionmain_0_main_section.png",
        "test": "..\\..\\..\\bitmaps_test\\garage\\20250829-103230\\garage-test_main_section_0_sectionmain_0_main_section.png",
        "selector": "section.main",
        "fileName": "garage-test_main_section_0_sectionmain_0_main_section.png",
        "label": "main_section",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "https://garage-codd.ru",
        "expect": 0,
        "viewportLabel": "main_section",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": -4979
          },
          "rawMisMatchPercentage": 1.8176190610434522,
          "misMatchPercentage": "1.82",
          "analysisTime": 153
        },
        "diffImage": "..\\..\\..\\bitmaps_test\\garage\\20250829-103230\\failed_diff_garage-test_main_section_0_sectionmain_0_main_section.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\..\\..\\bitmaps_reference\\garage\\garage-test_water_patrol_0_sectionwater_patrol_0_water_patrol.png",
        "test": "..\\..\\..\\bitmaps_test\\garage\\20250829-103230\\garage-test_water_patrol_0_sectionwater_patrol_0_water_patrol.png",
        "selector": "section#water_patrol",
        "fileName": "garage-test_water_patrol_0_sectionwater_patrol_0_water_patrol.png",
        "label": "water_patrol",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "https://garage-codd.ru",
        "expect": 0,
        "viewportLabel": "water_patrol",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": -2
          },
          "rawMisMatchPercentage": 6.941021904257198,
          "misMatchPercentage": "6.94",
          "analysisTime": 49
        },
        "diffImage": "..\\..\\..\\bitmaps_test\\garage\\20250829-103230\\failed_diff_garage-test_water_patrol_0_sectionwater_patrol_0_water_patrol.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\..\\..\\bitmaps_reference\\garage\\garage-test_open_menu_0_menu_0_open_menu.png",
        "test": "..\\..\\..\\bitmaps_test\\garage\\20250829-103230\\garage-test_open_menu_0_menu_0_open_menu.png",
        "selector": ".menu",
        "fileName": "garage-test_open_menu_0_menu_0_open_menu.png",
        "label": "open_menu",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "https://garage-codd.ru",
        "expect": 0,
        "viewportLabel": "open_menu",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": -4979
          },
          "rawMisMatchPercentage": 0.39009814971353435,
          "misMatchPercentage": "0.39",
          "analysisTime": 166
        },
        "diffImage": "..\\..\\..\\bitmaps_test\\garage\\20250829-103230\\failed_diff_garage-test_open_menu_0_menu_0_open_menu.png"
      },
      "status": "fail"
    }
  ],
  "id": "garage-test"
});