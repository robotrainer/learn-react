import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.scss";

import { App } from "./components/App/App.jsx";

import { ThemeProvider } from "./context/ThemeProvider.jsx";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);
