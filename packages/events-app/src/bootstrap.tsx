import React from "react";
import { mount } from "./entry";
import { BrowserRouter } from "react-router-dom";

if (process.env.NODE_ENV === "development") {
  const element = document.getElementById("$events_app_root");
  if (element) {
    mount(element, { router: BrowserRouter });
  }
}
