import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { TheThemeProvider } from "./context/theme.context.jsx";

// console.log("theThemeProvider---->", TheThemeProvider)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TheThemeProvider>
      <App />
    </TheThemeProvider>
  </React.StrictMode>
);
