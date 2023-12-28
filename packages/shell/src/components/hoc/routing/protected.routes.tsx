import React, { Suspense, SuspenseProps } from "react";
import { Navigate } from "react-router-dom";
import { useAuthState } from "contexts/AuthStore";

export const ProtectedRoutingWrapper = ({ children }: SuspenseProps) => {
  const { authState: auth } = useAuthState();

  if (!auth.loggedIn) return <Navigate to="/auth/signin" />;

  return children;
};
