Feature: My login
    Postiv Einloggen als Valider User

    Scenario: Seite laden
        Given Seite laden

    Scenario: User Namen Input
        When Inputfield: "Username Field" type text: "standard_user" eingeben

    Scenario: Passwort Input
        When Inputfield: "Password Field" type text: "secret_sauce" eingeben

    Scenario: Klick on Login
        Then Klick on button: "Login"
