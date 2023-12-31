import { persistAuthAfterLogin } from "../../../application/usecases/persistAuth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuthState } from "../../../contexts/auth/selectors";

export const useAuthSubscriber = () => {
  const setAuthState = useAuthState()[1];
  const nav = useNavigate();

  const handleEventStream = (e: MessageEvent<any>) => {
    if (
      e.origin === "http://localhost:3005" &&
      e.data.type === "signin-success"
    ) {
      const { payload } = e.data;
      setAuthState({ loggedIn: true, details: payload });
      persistAuthAfterLogin(payload);
      nav("/events");
    }
  };

  useEffect(() => {
    window.addEventListener("message", handleEventStream);

    return () => {
      window.removeEventListener("message", handleEventStream);
    };
  }, []);
};
