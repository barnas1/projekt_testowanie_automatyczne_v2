const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://fakestore.testelka.pl/',
    viewportHeight: 1080,
    viewportWidth: 1440,
    watchForFileChanges: false,
    retries: 1,
    setupNodeEvents(on, config) {
      // implement node event listeners here

    },
  },
});
