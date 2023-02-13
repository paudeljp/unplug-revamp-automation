const { defineConfig } = require("cypress");
const fs = require("fs");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("task", {
        checkFileExists(filename) {
          if (fs.existsSync(filename)) {
            return true;
          }
          return false;
        },
      });
      on("task", {
        downloads: (downloadspath) => {
          return fs.readdirSync(downloadspath);
        },
      });
    },
    projectId: "",
    chromeWebSecurity: false,
    redirectionLimit: 500,
    viewportWidth: 1440,
    viewportHeight: 900,
    experimentalSessionAndOrigin: true,
    defaultCommandTimeout: 60000,
    responseTimeout: 60000,
    requestTimeout: 60000,
    pageLoadTimeout: 60000,
    excludeSpecPattern: [".txt"],

    retries: {
      openMode: 0,
      runMode: 1,
    },

    //report
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/reports/mocha",
      reportFilename: "[status]-[datetime]-[name]-report",
      overwrite: false,
      html: true,
      json: true,
      charts: true,
    },
  },
  env: {
    MAILSLURP_API_KEY:
      "d5a5488878a9995d799e9ca215845e2ecd42e5e67cf6d91d0a7d0c9981f8b558",
    dev: {
      cmsURL: "https://dev-cms.unplug.app/",
      mainApiURL: "",
      cmsApiURL: "",
    },
    uat: {
      cmsURL: "",
      mainApiURL: "",
      cmsApiURL: "",
    },
    qa: {
      cmsURL: "",
      mainApiURL: "",
      cmsApiURL: "",
    },
    testingEnv: "dev",
    model: {},
  },
});
