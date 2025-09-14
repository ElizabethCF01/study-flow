import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { StudyFlow } from "./screens/StudyFlow/StudyFlow";
import "./index.css"

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <StudyFlow />
  </StrictMode>,
);
