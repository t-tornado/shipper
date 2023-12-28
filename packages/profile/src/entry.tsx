import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app";

const mount = (el: HTMLElement) => {
  const root = createRoot(el);
  if (root) {
    root.render(<App />);
  }
};

export { mount };
