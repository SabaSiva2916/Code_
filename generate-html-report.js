const reporter = require("cucumber-html-reporter");

const options = {
  theme: "bootstrap",
  jsonFile: "reports/cucumber-report.json",
  output: "reports/cucumber-html-report.html",
  reportSuiteAsScenarios: true,
  launchReport: true,
  metadata: {
    App: "SauceDemo Automation",
    Browser: "Chrome",
    Platform: process.platform,
    Executed: "Local",
  },
};

reporter.generate(options);
console.log("HTML report generated at reports/cucumber-html-report.html");
