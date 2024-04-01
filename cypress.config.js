const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1300,
  viewportHeight: 800,
  video: true,
  chromeWebSecurity: false,
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: 'cypress/report',
    overwrite: true,
    html: true,
    json: false,
    timestamp: 'dd-mm-yyyy_HH-MM-ss'
  },
  env: {
    baseUrl: "https://demo.nopcommerce.com/",
  },
  e2e: {
    defaultCommandTimeout: 9000,
    experimentalRunAllSpecs: true,
    hideXHRInCommandLog: true,
    //Aqui ficarão todos os meus testes:
    specPattern: [
       "cypress/e2e/01 - Tela Home.cy.js",
       "cypress/e2e/02 - Tela Cadastro.cy.js",
       "cypress/e2e/03 - Testes de BackEnd.cy.js"
    ],
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});