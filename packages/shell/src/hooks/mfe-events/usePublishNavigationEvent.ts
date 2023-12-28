import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const usePublishNavigationEvents = () => {
  const locationState = useLocation();

  useEffect(() => {
    window.postMessage(
      {
        type: "shell-app",
        cmd: { exec: "parent-navigation", payload: locationState },
      },
      "http://localhost:3005"
    );
  }, [locationState.pathname]);
};
