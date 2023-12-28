import { useContext } from "react";
import { AuthContext } from "./auth.provider";

export const useAuthState = () => useContext(AuthContext);
