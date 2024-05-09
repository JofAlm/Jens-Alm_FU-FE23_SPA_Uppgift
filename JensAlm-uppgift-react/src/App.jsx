// Importera nödvändiga bibliotek och komponenter
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import store from "./store";
import Header from "./Components/Header";
import OmMig from "./Components/OmMig";
import Kontakt from "./Components/Kontakt";
import Projekt from "./Components/Projekt";
import ThemeToggleButton from "./Components/ThemeToggleButton"; // Importera knappen
import "./App.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const App = () => {
  // Hantera lokal state för meddelande i Kontakt-komponenten
  const [message, setMessage] = useState("");
  // Använd useSelector för att hämta aktuell temainställning från Redux-storen
  const currentTheme = useSelector((state) => state.theme.theme);

  // Ändrar body klass baserat på aktuellt tema
  useEffect(() => {
    document.body.className = currentTheme === "light" ? "" : "dark-theme";
  }, [currentTheme]);

  return (
    // Provider omsluter hela appen och tillhandahåller Redux-storen
    <Provider store={store}>
      <Router>
        <Header />
        <nav className="navigation">
          <Link to="/">Om Mig</Link>
          <Link to="/kontakt">Kontakt</Link>
          <Link to="/projekt">Projekt</Link>
          {/* Lägg till knappen i navigationsmenyn */}
          <ThemeToggleButton />
        </nav>
        {/* Definiera olika rutter för olika vyer */}
        <Routes>
          <Route path="/" element={<OmMig />} />
          <Route
            path="/kontakt"
            element={<Kontakt message={message} setMessage={setMessage} />}
          />
          <Route path="/projekt" element={<Projekt />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
