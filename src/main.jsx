import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { TheThemeProvider } from "./context/theme.context.jsx";
import { BrowserRouter } from "react-router-dom";

// console.log("theThemeProvider---->", TheThemeProvider)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <TheThemeProvider>
        <App />
      </TheThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
