module.exports = {
  default: {
    require: ["hooks/**/*.js", "step-definitions/**/*.js"],
    format: ["progress"],
    formatOptions: {
      snippetInterface: "async-await",
    },
    paths: ["features/**/*.feature"],
    publishQuiet: true,
  },
};
