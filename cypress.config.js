const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // cypress-mochawesome-reporter requirement
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },
  },
});
