const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3001", // 👈 Point to your React dev server
    setupNodeEvents(on, config) {
      // implement node event listeners here if needed
    },
  },
});
