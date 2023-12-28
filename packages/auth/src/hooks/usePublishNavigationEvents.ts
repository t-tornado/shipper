import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const usePublishNavigationEvents = () => {
  const location = useLocation();

  useEffect(() => {
    window.postMessage({
      type: "navigation",
      payload: location,
    });
  }, [location.pathname]);
};
