import "./index.css";
import React from "react";
import { assets } from "./assets";
import { useProfile } from "./hooks/useProfile";

export const App = () => {
  const profile = useProfile();
  if (!profile) return null;
  return (
    <div className='w-full h-full flex flex-col'>
      <div className='flex flex-col w-full h-44 bg-blue-100'>
        <img
          src={assets.Banner}
          className='mt-auto -bottom-12 relative left-10 w-24 h-24 rounded-full border-2 border-white'
        />
      </div>
      <div className='px-10'>
        <div className='mt-20 flex flex-col'>
          <h2 className='text-xl'>{profile?.email}</h2>
        </div>
      </div>
    </div>
  );
};
