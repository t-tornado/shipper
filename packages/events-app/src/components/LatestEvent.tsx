import React from "react";
import { assets } from "../assets";
import { useNavigate } from "react-router-dom";

interface Props {
  data: any;
}

export const LatestEvent = ({ data }: Props) => {
  const nav = useNavigate();

  const handleOnClick = () => {
    nav(`/events/${data.id}`);
  };
  return (
    <div
      onClick={handleOnClick}
      className="flex gap-x-5 border-b-[1px] border-[#a9a9a970] hover:bg-gray-100 p-2 py-5 hover:cursor-pointer"
    >
      <div className="">
        <img src={assets.Banner} className="w-72 h-44 object-fit rounded-sm" />
      </div>
      <div className="flex flex-col py-2">
        <h3 className="text-xl">Event name</h3>
        <p className="w-[70%] text-sm mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          beatae esse recusandae minima dolore modi porro officia voluptate,
          itaque dignissimos delectus quae tenetur ab, unde adipisci? Doloremque
          corrupti officiis numquam.
        </p>
        <div className="flex mt-auto items-center gap-x-2">
          <span className="text-sm">Event Author</span>
          <div className="w-[1px] h-5 bg-gray-400" />
          <span className="text-sm">Event Date</span>
        </div>
      </div>
    </div>
  );
};
