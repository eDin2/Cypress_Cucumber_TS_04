/// <reference types="cypress" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given(`Seite laden`, () => {
  cy.visit("/");
});

When(`User Namen eingeben`, () => {
  cy.fixture("selectors").then((sel) => {
    cy.typeTxt_02(sel.INPUT_FILED.inputUserNameField, sel.USER.userName);
  });
});

When(`Passwort eingeben`, () => {
  cy.fixture("selectors").then((sel) => {
    cy.typeTxt_02(sel.INPUT_FILED.inputPasswordField, sel.USER.passWord);
  });
});

Then(`Klick auf Login`, () => {
  cy.fixture("selectors").then((sel) => {
    cy.clickElement(sel.BUTTONS.loginBtn);
  });
});
