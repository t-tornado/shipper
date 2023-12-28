import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import { App } from "./app";

interface MountConfig {
  router?: typeof MemoryRouter | typeof BrowserRouter;
  initialPath?: string;
  name?: string;
  authNavigationListener?: Function;
  provider: any;
}

export const mount = (el: HTMLElement, config?: MountConfig) => {
  const root = createRoot(el);
  if (root) {
    const Router = config?.router ?? MemoryRouter;
    root.render(
      <Router initialEntries={[config?.initialPath ?? "/"]}>
        <App />
      </Router>
    );
  }
};
