// src/store.js
import { configureStore } from "@reduxjs/toolkit"; // Importera configureStore från Redux Toolkit
import themeReducer from "./reducers/themeReducer"; // Importera din reducer

// Konfigurera Redux-storen med reducer-konfiguration
const store = configureStore({
  reducer: {
    theme: themeReducer, // Lägg till din reducer under "theme" nyckeln
  },
});

export default store;
