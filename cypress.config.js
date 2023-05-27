const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'tdzxc8',
  env: {
    login: '/login-v2',
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://www.redfin.com'
  },
  chromeWebSecurity: false,
});
