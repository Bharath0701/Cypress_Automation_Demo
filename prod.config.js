const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  reporter:'mochawesome',
  reporterOptions:{
    reportDir: 'cypress/reports',
    overwrite: false,
    html:true,
    json:false,
    video:true
  },
  projectId: 'txqhpt',
  e2e: {
    baseUrl:'https://opensource-demo.orangehrmlive.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
