import React, { Suspense, SuspenseProps } from "react";
import { Navigate } from "react-router-dom";
import { useAuthState } from "../../../contexts/auth/selectors";

export const ProtectedRoutingWrapper = ({ children }: SuspenseProps) => {
  const { loggedIn } = useAuthState()[0];

  if (!loggedIn) return <Navigate to='/auth/signin' />;

  return children;
};
