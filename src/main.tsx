import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { WebAppProvider } from "@vkruglikov/react-telegram-web-app";
import { StrictMode } from "react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <WebAppProvider>
      <App />
    </WebAppProvider>
  </StrictMode>
);
