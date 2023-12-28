import React from "react";
import { createRoot } from "react-dom/client";
import { Bootstrap } from "./app";

interface MountConfig {}

const mount = (element: HTMLElement, config?: MountConfig) => {
  if (!element) return;
  const root = createRoot(element);
  root.render(<Bootstrap />);
};

export { mount };
