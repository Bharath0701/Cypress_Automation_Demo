const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  reporter:'mochawesome',
  reporterOptions:{
    reportDir: 'cypress/reports',
    overwrite: false,
    html:true,
    json:false,
  },
  projectId: 'txqhpt',
  e2e: {
    baseUrl:'https://adactinhotelapp.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
