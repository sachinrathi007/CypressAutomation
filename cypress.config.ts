import { defineConfig } from "cypress";


export default defineConfig({
  viewportHeight:1080,
  viewportWidth:1920,
  e2e: {
    excludeSpecPattern:['**/1-getting-started/*','**/2-advanced-examples/*'],
    baseUrl: "https://airmalta.com/en-mt",
    responseTimeout: 30000,
    requestTimeout: 30000,
    defaultCommandTimeout: 30000,
    specPattern:"cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    watchForFileChanges: false,
    waitForAnimations: true,
    pageLoadTimeout: 50000,
    "video": false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
