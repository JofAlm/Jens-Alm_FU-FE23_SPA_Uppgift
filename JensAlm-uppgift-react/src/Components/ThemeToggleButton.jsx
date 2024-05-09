// Importera nödvändiga funktioner från react-redux
import { useSelector, useDispatch } from "react-redux";
import { setTheme } from "../actions";
// Skapa ThemeToggleButton-komponenten
const ThemeToggleButton = () => {
  // Använd useDispatch för att få dispatch-funktionen
  const dispatch = useDispatch();
  // Använd useSelector för att hämta aktuell temainställning från Redux-storen
  const currentTheme = useSelector((state) => state.theme.theme);
  // Funktion för att växla mellan ljus och mörk temainställning
  const toggleTheme = () => {
    const newTheme = currentTheme === "light" ? "dark" : "light";
    // Uppdatera temainställning i Redux-storen
    dispatch(setTheme(newTheme));
  };

  return (
    // Rendera knappen för att byta tema
    <button onClick={toggleTheme}>
      Byt till {currentTheme === "light" ? "Mörkt" : "Ljust"} Tema
    </button>
  );
};

export default ThemeToggleButton;
