import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const useSubscribeToNavigation = () => {
  const loc = useLocation();
  const nav = useNavigate();

  useEffect(() => {
    const handler = (ev: any) => {
      if (
        ev.origin === "http://localhost:3005" &&
        ev.data.type === "shell-app"
      ) {
        const cmd = ev.data.cmd;
        if (cmd.exec === "parent-navigation") {
          const payload = cmd.payload;
          if (loc.pathname !== payload.pathname) {
            nav(payload.pathname);
          }
        }
      }
    };
    window.addEventListener("message", handler);

    return () => {
      window.removeEventListener("message", handler);
    };
  }, [loc.pathname]);
};
