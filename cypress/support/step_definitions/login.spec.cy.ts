/// <reference types="cypress" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given(`Seite laden`, () => {
  cy.visit("/");
});

When(`User Namen eingeben`, () => {
  cy.fixture("selectors").then((sel) => {
    cy.typeTxt_02(sel.inputUserNameField, sel.userName);
  });
});

When(`Passwort eingeben`, () => {
  cy.fixture("selectors").then((sel) => {
    cy.typeTxt_02(sel.inputPasswordField, sel.passWord);
  });
});

Then(`Klick auf Login`, () => {
  cy.fixture("selectors").then((sel) => {
    cy.clickElement(sel.loginBtn);
  });
});
