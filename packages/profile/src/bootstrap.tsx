import { mount } from "./entry";

if (process.env.NODE_ENV === "development") {
  const anchor = document.getElementById("$profile_root");
  if (anchor) {
    mount(anchor);
  }
}
