///<reference types="cypress" />

import selectors from "selectors";
import { AIRPORTS, CLASS, ROUTE } from "types";

describe("AirMalta Ticket test suite", () => {
  beforeEach(() => {
    cy.openBaseUrl();
  });

  it("Get First Available Flight", () => {
    cy.selectTripTypeandClass(ROUTE.ONEWAY, CLASS.ECONOMY);
    cy.selectAirport(selectors.orig, AIRPORTS.VIENNA);
    cy.selectAirport(selectors.dest, AIRPORTS.MALTA);
    cy.searchFlight();
    cy.getFlight(AIRPORTS.VIENNA, AIRPORTS.MALTA);
  });
});
