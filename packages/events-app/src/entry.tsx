import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app";
import { BrowserRouter, MemoryRouter } from "react-router-dom";

interface MountConfig {
  router?: typeof BrowserRouter | typeof MemoryRouter;
  initialRoute?: string;
}

const mount = (element: HTMLElement, config?: MountConfig) => {
  if (!element) return;
  const root = createRoot(element);
  const Router = config?.router ?? MemoryRouter;
  root.render(
    <Router initialEntries={[config?.initialRoute ?? ""]}>
      <App />
    </Router>
  );
};

export { mount };
