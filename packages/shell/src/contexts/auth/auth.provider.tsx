import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useState,
} from "react";

export type DefaultAuthStateType = {
  loggedIn: boolean;
  details: any;
};

export const defaultAuthState = {
  loggedIn: false,
  details: null,
};

export const AuthContext = createContext<
  [
    authState: DefaultAuthStateType,
    setAuthState: Dispatch<SetStateAction<DefaultAuthStateType>>
  ]
>([defaultAuthState, () => null]);

export const AuthProvider = ({ children }: any) => {
  const authState = useState(defaultAuthState);

  return (
    <AuthContext.Provider value={authState}>{children}</AuthContext.Provider>
  );
};
