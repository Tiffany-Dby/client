import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./shared/assets/styles/index.css";
import App from "./App.tsx";
import { ThemeProvider } from "./lib/context/theme-provider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
