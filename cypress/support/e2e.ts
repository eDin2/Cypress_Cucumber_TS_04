/// <reference types="cypress" />

// ***********************************************************
// This example support/e2e.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";

// Alternatively you can use CommonJS syntax:
// require('./commands')

// -----------------------------------------------
// Deklaration für benutzderdefinierte Cypress-Befehle
// wird für die Cypress.Commands.add benötigt

declare global {
  namespace Cypress {
    interface Chainable {
      clickElement(element: string): void;
      typeTxt(text: string): void;
      typeTxt_02(field: any, text: string): void;
    }
  }
}
