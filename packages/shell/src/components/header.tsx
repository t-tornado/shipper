import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ReturnCondition, ReturnIf } from "../utils/render/return";
import { resetAuth } from "../application/usecases/persistAuth";
import { defaultAuthState } from "../contexts/auth/auth.provider";
import { useAuthState } from "../contexts/auth/selectors";
import { Condition } from "../utils/render/condition";

export const Header = () => {
  const [authState, setAuthState] = useAuthState();
  const { pathname } = useLocation();
  const nav = useNavigate();
  const atSignin = pathname === "/auth/signin";
  const handleRedirectToSignin = () => {
    nav("/auth/signin");
  };

  const handleRedirectToSignup = () => {
    setAuthState(defaultAuthState);
    nav("/auth/signup");
  };

  const handleLogout = () => {
    setAuthState(defaultAuthState);
    resetAuth();
    nav("/events");
  };

  const handleOpenProfile = () => {
    nav("/profile/userid");
  };

  return (
    <header className='w-screen h-14 flex items-center px-5 shadow-md'>
      <h3 className='text-sm font-bold'>🎩Eventli</h3>
      <Condition condition={authState.loggedIn}>
        <button
          onClick={handleOpenProfile}
          className='text-sm ml-5 rounded-md  bg-gray-200 p-2 text-blue-500'
        >
          {authState.details?.email}
        </button>
      </Condition>
      <div className='ml-auto'>
        <Condition condition={authState.loggedIn}>
          <button
            onClick={handleLogout}
            className='w-[100px] py-1 border-[1px] border-black'
          >
            Logout
          </button>
        </Condition>
        <Condition condition={!authState.loggedIn}>
          <Condition condition={atSignin}>
            <button
              onClick={handleRedirectToSignup}
              className='w-[100px] py-1 border-[1px] border-black'
            >
              Sign up
            </button>
          </Condition>
          <Condition condition={!atSignin}>
            <button
              onClick={handleRedirectToSignin}
              className='w-[100px] py-1 border-[1px] border-black'
            >
              Log in
            </button>
          </Condition>
        </Condition>
      </div>
    </header>
  );
};
