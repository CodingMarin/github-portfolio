import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import Routes from "@/Routes";

import "@/styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={Routes} />
  </StrictMode>
);
