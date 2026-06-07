const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.csdd.lv/",
    supportFile: false, 
    viewportWidth: 1440,
    viewportHeight: 900,
    defaultCommandTimeout: 10000, 
    setupNodeEvents(on, config) {
      return config;
    },
    env: {
      targetPattern: "TX-9999",
      pollingIntervalMs: 800
    },
  },
});