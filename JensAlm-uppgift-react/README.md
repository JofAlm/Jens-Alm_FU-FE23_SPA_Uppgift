Min Portfolio

Välkommen till min portfolio-webbapplikation, skapad med React, Redux och React Router för navigation. Projektet är en Single Page Application (SPA) som fungerar som min personliga hemsida.

Funktioner

Om Mig: En sida som presenterar mig och innehåller information om mig själv.
Projekt: Visar mina projekt genom att hämta dem från GitHub och visa som länkar.
Kontakt: Innehåller ett formulär för att skicka meddelanden (formuläret är för närvarande inte kopplat till någon specifik funktionalitet).
Ljust och mörkt tema: Möjlighet att växla mellan ljust och mörkt tema med en knapp.
Tekniker och ramverk

React: För att bygga användargränssnittet och hantera komponenter.
React Router: För att hantera navigationen mellan sidorna.
Redux: För att hantera globalt state, inklusive temaväxling.
GitHub API: För att hämta projektlistan från GitHub.
Struktur

src/
components/: Innehåller dina React-komponenter, t.ex. OmMig, Projekt, Kontakt och ThemeToggleButton.
reducers/: Innehåller Redux-reducerar, t.ex. themeReducer.
store.js: Här konfigureras din Redux-store och kombinerar reducerar.
App.jsx: Huvudkomponenten som hanterar routing och temaväxling.
public/
Innehåller HTML-filer och andra resurser som bilder.
Installation

Klona detta repo:

git clone [https://github.com/JofAlm/Jens-Alm_FU-FE23_SPA_Uppgift]

Navigera till projektmappen:

cd min-portfolio

Installera dependencies:

npm install

Starta development servern:

npm run dev

Projektet körs nu på http://localhost:3000.
