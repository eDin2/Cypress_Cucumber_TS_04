Feature: My login
    Postiv Einloggen als Valider User

    Scenario: Seite laden
        Given Seite laden

    Scenario: User Namen Input
        When Username Inputfield: "Username Field" with Username: "standard_user" eingeben

    Scenario: Passwort Input
        When Passwort Inputfield: "Password Field" with Passwort: "secret_sauce" eingeben

    Scenario: Klick on Login
        Then Klick on button: "Login"
