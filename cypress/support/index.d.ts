/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject = any> {
    openBaseUrl();
    selectTripTypeandClass(
      tripType: string,
      tripClass: string
    ): Chainable<Element>;
    selectAirport(
      originDestination: string,
      airport: string
    ): Chainable<Element>;
    searchFlight(): Chainable<Element>;
    getFlight(orig: string, dest: string): Chainable<Element>;
  }
}
