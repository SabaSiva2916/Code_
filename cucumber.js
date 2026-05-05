module.exports = {
  default: {
    require: ["step-definitions/**/*.js"],
    format: [
      "progress",
      "json:reports/cucumber-report.json",
      "allure-cucumberjs/reporter",
    ],
    formatOptions: {
      snippetInterface: "async-await",
    },
    paths: ["features/**/*.feature"],
    publishQuiet: true,
  },
};
