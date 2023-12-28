import { useContext } from "react";
import { AuthContext } from "./auth.context";

export const useAuthState = () => useContext(AuthContext);
