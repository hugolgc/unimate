import React from "react";
import { createRoot } from "react-dom/client";
import { AppIndex } from "./app/app.index";

const container = document.getElementById("unimate");
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <AppIndex />
  </React.StrictMode>
);
