/// <reference types="cypress" />

describe("template spec", () => {
  it("Visit the Page", () => {
    cy.visit("/");
  });

  it("Input User Name", () => {
    cy.fixture("selectors").then((sel) => {
      cy.typeTxt_02(sel.inputUserNameField, sel.userName);
    });
  });

  it("Input Password", () => {
    cy.fixture("selectors").then((sel) => {
      cy.typeTxt_02(sel.inputPasswordField, sel.passWord);
    });
  });

  it("Click On Login", () => {
    cy.fixture("selectors").then((sel) => {
      cy.clickElement(sel.loginBtn);
    });
  });
});
