import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const usePublishNavigation = () => {
  const locationState = useLocation();

  useEffect(() => {
    window.postMessage(
      {
        type: "navigation",
        payload: locationState,
      },
      "http://localhost:3005"
    );
  }, [locationState.pathname]);
};
