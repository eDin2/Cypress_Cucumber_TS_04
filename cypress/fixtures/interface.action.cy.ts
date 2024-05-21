/// <reference types="cypress" />

import selectors from "./selectors.json";

interface ButtonSelectors {
  [key: string]: string;
}

export const userInterfaceSelectors: ButtonSelectors = {
  // Inputfield
  "Username Field": selectors.INPUT_FIELD.inputUserNameField,
  "Password Field": selectors.INPUT_FIELD.inputPasswordField,

  // User
  standard_user: selectors.USERS.userName,
  secret_sauce: selectors.PASSWORD.passWord,

  // Buttons
  Login: selectors.BUTTONS.loginBtn,
};
