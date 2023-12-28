import { mount } from "auth/AuthPage";
import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

interface AuthAppRef extends HTMLDivElement {
  onNavigateInParent?: Function;
}

export default () => {
  const ref = useRef<AuthAppRef>(null);
  const nav = useNavigate();

  const authNavigationListener = ({ pathname }: any) => {
    if (location.pathname !== pathname) {
      nav(pathname);
    }
  };

  useEffect(() => {
    if (ref.current) {
      mount(ref.current, {
        initialPath: location.pathname,
        authNavigationListener,
      });
    }
  }, [location]);

  return <div ref={ref}>Auth</div>;
};
