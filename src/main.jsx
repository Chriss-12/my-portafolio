import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "./assets/controllers/sw_background_controller.jsx";
import { BrowserRouter } from "react-router-dom";

/* const basename = import.meta.env.MODE === "development" ? "" : "/my-portafolio"; */

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter basename={"/my-portafolio/"}>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
