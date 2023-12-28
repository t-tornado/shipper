import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useSubscribeToNavigationEvents = () => {
  const nav = useNavigate();

  const handleSubAppNavigation = useCallback((e: MessageEvent) => {
    if (e.origin === "http://localhost:3005") {
      const { payload, type } = e.data;
      if (type === "navigation") {
        const { pathname } = payload;
        nav(pathname);
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("message", handleSubAppNavigation);

    return () => {
      window.removeEventListener("message", handleSubAppNavigation);
    };
  }, []);
};
