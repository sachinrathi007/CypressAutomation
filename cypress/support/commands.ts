/// <reference types="cypress" />

import selectors from "selectors";
import routes from "../../routes";

Cypress.Commands.add("openBaseUrl", () => {
  cy.visit("/");
  cy.on("uncaught:exception", (err, runnable) => {
    return false;
  });
  cy.url().should("contains", "airmalta.com");
  cy.get(selectors.acceptCookie).click();
});

/* Selecting trip type and its class */
Cypress.Commands.add(
  "selectTripTypeandClass",
  (tripType: string, tripClass: string) => {
    cy.get(selectors.ddmTypeClass).eq(0).type(tripType);
    cy.get(selectors.selTypeClass).contains(tripType).click();
    cy.get(selectors.ddmTypeClass).eq(1).type(tripClass);
    cy.get(selectors.selTypeClass).contains(tripClass).click();
  }
);

/* Selectig Airport (Both directions) */
Cypress.Commands.add(
  "selectAirport",
  (originDestination: string, airport: string) => {
    cy.get(originDestination).children().first().type(airport);
    cy.get(selectors.selAirport).contains(airport).click();
  }
);

/* Selecting date and then search for available flight */
Cypress.Commands.add("searchFlight", () => {
  cy.get(selectors.selDay).click();
  cy.get(selectors.selToday).click({ force: true });
  cy.intercept("POST", routes.flightSearch).as("flightSearch");
  cy.get(selectors.selBtn).contains("Find flights").click();
  cy.wait("@flightSearch").its("response.statusCode").should("be.equal", 200);
});

/* Getting flight info and print out it */
Cypress.Commands.add("getFlight", (orig: string, dest: string) => {
  cy.get('button:contains("€")', { timeout: 6000 })
    .should("be.visible")
    .first()
    .children()
    .contains("€")
    .invoke("text")
    .then((text) => {
      expect(text).contains("€");
      cy.log(`Price for first available fligt 
                          from ${orig} to ${dest} 
                          is: ${text}`);
    });
});
