import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./store"; // Importera din Redux-store

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Provider omsluter hela appen och tillhandahåller Redux-storen */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
