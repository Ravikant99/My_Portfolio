import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Use HashRouter for GitHub Pages compatibility
import { HashRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <HashRouter>
    <App />
  </HashRouter>
);
