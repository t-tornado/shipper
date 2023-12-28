import React from "react";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import { Events } from "./pages/events";
import { ExploreEvent } from "./pages/explore";
import { usePublishNavigation } from "./hooks/mfe/usePublishNavigation";
import { useSubscribeToNavigation } from "./hooks/mfe/useSubscribeToEvents";

export const App = () => {
  usePublishNavigation();
  useSubscribeToNavigation();

  return (
    <Routes>
      <Route path="/events" element={<Events />} />
      <Route path="/events/:id" element={<ExploreEvent />} />
    </Routes>
  );
};
