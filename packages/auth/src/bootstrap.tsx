import { BrowserRouter } from "react-router-dom";
import { mount } from "./entry";

if (process.env.NODE_ENV === "development") {
  const anchor = document.getElementById("$auth-root");
  if (anchor) {
    mount(anchor, { router: BrowserRouter });
  }
}
export { mount };
