# Cypress + Cucumber + TypeScript
Cypress with TS 

# Login Feature

Dieses Repository enthält die Cypress-Tests für das Login-Feature, implementiert mit dem Cucumber-Preprocessor.

## Überblick

Das Login-Feature ermöglicht es Benutzern, sich sicher in die Anwendung einzuloggen. Die Tests decken das Laden der Seite, die Eingabe von Benutzerdaten und das Klicken auf den Login-Button ab.

## Szenarien

- **Seite laden**: Öffnet die Startseite der Anwendung.
- **User Namen Input**: Eingabe des Benutzernamens in das entsprechende Feld.
- **Passwort Input**: Eingabe des Passworts in das entsprechende Feld.
- **Klick auf Login**: Betätigen des Login-Buttons, um den Anmeldevorgang abzuschließen.

## Technische Details
### Voraussetzungen
- Node.js
- Cypress
- @badeball/cypress-cucumber-preprocessor

### Setup
Installieren Sie die Abhängigkeiten mit:
bash
npm install

*****

## Tests ausführen
Starten Sie die Tests mit:
npx cypress open


******

## Testimplementierung:
Die Testimplementierung verwendet die Gherkin-Syntax für die Szenarien und die Cypress-Befehle für die Interaktion mit der Webanwendung.

*****

Konfiguration
Die Selektoren und Benutzerdaten sind in einer selectors.json Datei definiert, um die Wartung zu erleichtern.

Mitwirken
Ich begrüßen Beiträge zu diesem Projekt. 
Bitte erstellen Sie einen Pull Request oder ein Issue, um Verbesserungen vorzuschlagen.
