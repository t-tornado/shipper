import { Dispatch, SetStateAction, createContext } from "react";

export type DefaultAuthStateType = {
  loggedIn: boolean;
  details: any;
};

export const defaultAuthState = {
  loggedIn: false,
  details: null,
};

export const AuthContext = createContext<{
  authState: DefaultAuthStateType;
  setAuthState: Dispatch<SetStateAction<DefaultAuthStateType>>;
}>({ authState: defaultAuthState, setAuthState: () => {} });
