import { mount } from "./entry";

if (process.env.NODE_ENV === "development") {
  const element = document.getElementById("$explore-events");
  if (element) {
    mount(element);
  }
}
