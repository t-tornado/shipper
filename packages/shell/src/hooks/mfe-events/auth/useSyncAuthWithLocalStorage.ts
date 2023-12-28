import { useEffect } from "react";
import { useAuthState } from "../../../contexts/auth/selectors";
import { LocalStorage } from "../../../infrastruture/LocalStorage";

export const useSyncAuthStateWithLocalStorage = () => {
  const [authState, setAuthState] = useAuthState();

  useEffect(() => {
    if (!authState.loggedIn) {
      const details = LocalStorage.get("shipper-auth");
      console.log(details);

      if (details) {
        setAuthState({ details, loggedIn: true });
        console.log("sync effect");
      }
    }
  }, [authState]);
};
