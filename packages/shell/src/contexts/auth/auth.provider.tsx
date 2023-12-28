import React, { useState } from "react";
import { AuthContext, defaultAuthState } from "./auth.context";

export const AuthProvider = ({ children }: any) => {
  const [auth, setAuth] = useState({ ...defaultAuthState, next: 233 });

  return (
    <AuthContext.Provider
      value={{ authState: auth, setAuthState: setAuth } as any}
    >
      {children}
    </AuthContext.Provider>
  );
};
