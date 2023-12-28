import React from "react";
import { BrowserRouter } from "react-router-dom";
import { mount } from "./entry";
import { AuthProvider } from "contexts/AuthStore";

if (process.env.NODE_ENV === "development") {
  const anchor = document.getElementById("$auth-root");
  if (anchor) {
    mount(anchor, { router: BrowserRouter, provider: AuthProvider });
  }
}
export { mount };
