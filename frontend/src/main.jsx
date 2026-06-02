import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ScreenProvider } from "./context/ScreenContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ScreenProvider>
      <App />
    </ScreenProvider>
  </StrictMode>,
);
