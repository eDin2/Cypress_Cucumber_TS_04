/// <reference types="cypress" />

/* 
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }
*/

import cypress = require("cypress");
import selectors from "../fixtures/selectors.json";
import { userInterfaceSelectors } from "../fixtures/interface.action.cy";

//--------------------------------------------------------------
//##############################################################
// Eingabe aus den geschweiften klammern
Cypress.Commands.add("inputTxtInField", (field: string, text: string) => {
  if (!(text in userInterfaceSelectors)) {
    throw new Error(
      `Unsported Field, please update the Switch statment ${text}`
    );
  }

  const fieldSelector = userInterfaceSelectors[field];
  cy.get(fieldSelector).should("exist").type(text);
});

//--------------------------------------------------------------
//##############################################################
Cypress.Commands.add("clickOnElement", (btnElement: string) => {
  if (!(btnElement in userInterfaceSelectors)) {
    throw new Error(
      `Unsported Btn, please update the Switch statment ${btnElement}`
    );
  }

  const btnSelector = userInterfaceSelectors[btnElement];
  cy.get(btnSelector).should("exist").click();
});
