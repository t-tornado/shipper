import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
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

export const AuthContext = createContext<{
  authState: DefaultAuthStateType;
  setAuthState: Dispatch<SetStateAction<DefaultAuthStateType>>;
}>({ authState: defaultAuthState, setAuthState: () => {} });

export const AuthProvider = ({ children }: any) => {
  const [auth, setAuth] = useState(defaultAuthState);

  return (
    <AuthContext.Provider value={{ authState: auth, setAuthState: setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthState = () => useContext(AuthContext);
