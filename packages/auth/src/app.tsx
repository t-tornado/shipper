import React from "react";
import { Signup } from "./pages/signup";
import { Route, Routes } from "react-router-dom";
import { Signin } from "./pages/signin";
import { Root } from "./pages/root";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Root />} />
      <Route path="/auth/signin" element={<Signin />} />
      <Route path="/auth/signup" element={<Signup />} />
    </Routes>
  );
};
