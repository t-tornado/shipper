import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app";
import { AuthProvider } from "contexts/AuthStore";
import { BrowserRouter } from "react-router-dom";

const anchor = document.getElementById("root");
if (anchor) {
  const root = createRoot(anchor);
  root.render(
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  );
}
