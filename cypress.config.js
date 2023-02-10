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
    viewportWidth: 2000,
    viewportHeight: 1000,
    experimentalSessionAndOrigin: true,
    defaultCommandTimeout: 60000,
    responseTimeout: 60000,
    requestTimeout: 60000,
    pageLoadTimeout: 60000,
    excludeSpecPattern: [".txt"],
  },
  env: {
    MAILSLURP_API_KEY:
      "d5a5488878a9995d799e9ca215845e2ecd42e5e67cf6d91d0a7d0c9981f8b558",
    dev: {
      cmsURL: "",
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
    testingEnv: "uat",
    model: {},
  },
});
