/// <reference types="cypress" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given(`Seite laden`, () => {
  cy.visit("/");
});

/* 
When(`User Namen eingeben`, () => {
  cy.fixture("selectors").then((sel) => {
    cy.typeTxt_02(sel.INPUT_FIELD.inputUserNameField, sel.USER.userName);
  });
});

When(`Passwort eingeben`, () => {
  cy.fixture("selectors").then((sel) => {
    cy.typeTxt_02(sel.INPUT_FIELD.inputPasswordField, sel.USER.passWord);
  });
});

Then(`Klick auf Login`, () => {
  cy.fixture("selectors").then((sel) => {
    cy.clickElement(sel.BUTTONS.loginBtn);
  });
});
*/

// Die geschwungenen Klammern ist der Inhalt der Anführungszeichen im .feature file
When(
  `Inputfield: {string} type text: {string} eingeben`,
  (field: string, text: string) => {
    cy.inputTxtInField(field, text);
  }
);

Then(`Klick on button: {string}`, (element: string) => {
  cy.clickOnElement(element);
});