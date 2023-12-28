import "./index.css";
import React from "react";
import { assets } from "./assets";
import { Event } from "./components/event";

export const App = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex flex-col w-full h-44 bg-blue-100">
        <img
          src={assets.Banner}
          className="mt-auto -bottom-12 relative left-10 w-24 h-24 rounded-full border-2 border-white"
        />
      </div>
      <div className="px-10">
        <div className="mt-20 flex flex-col">
          <h2 className="text-xl">User Name</h2>
          <p className="text-[#a9a9a9] text-sm mt-2">anthony@gmail.com</p>
        </div>
        <div className="mt-6">
          <h3 className="text-md">Events</h3>
          <div className="flex flex-wrap gap-3 mt-5 max-w-[1200px]">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((it) => (
              <Event key={it} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
