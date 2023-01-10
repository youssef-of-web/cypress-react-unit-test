import React from "react";
import Buttons from "./Buttons";

describe("<Buttons />", () => {
  it("test intial value", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Buttons />);
    cy.get(".value").should("have.text", 0);
  });

  it("test increment value", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Buttons />);
    cy.get(".inc__button").click();
    cy.get(".value").should("have.text", 1);
  });

  it("test decrement value", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Buttons />);
    cy.get(".dec__button").click();
    cy.get(".value").should("have.text", -1);
  });
});
