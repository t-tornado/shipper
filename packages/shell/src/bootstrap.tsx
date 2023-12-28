import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/auth/auth.provider";

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
