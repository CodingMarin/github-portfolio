import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import Routes from "@/Routes";

import "@/styles.css";
import { ThemeProvider } from "./context/themeContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={Routes} />
    </ThemeProvider>
  </StrictMode>
);
