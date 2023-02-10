const { defineConfig } = require("cypress");
const fs = require('fs')

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
      on('task', {
        downloads: (downloadspath) => {
          return fs.readdirSync(downloadspath)
        }
      })
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
    pageLoadTimeout:60000,
    specPattern:"**/e2e/**/cms/**/*.cy.js",
    // excludeSpecPattern:[
    //   "**/e2e/**/cms/**/*.cy.js"
    // ]
  },
  env: {
    MAILSLURP_API_KEY: "",
    dev: {
      cmsURL: "",
      mainApiURL: "",
      cmsApiURL: ""
    },
    "uat": {
      cmsURL: "",
      mainApiURL: "",
      cmsApiURL: ""
    },
    "qa": {
      cmsURL: "",
      mainApiURL: "",
      cmsApiURL: ""
    },
    testingEnv: "uat",
    model: {
    }
  }
});
