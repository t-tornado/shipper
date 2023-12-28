import React from "react";
import { assets } from "../assets";
import { useNavigate } from "react-router-dom";

interface Props {
  data: any;
}

export const Event = ({ data }: Props) => {
  const nav = useNavigate();

  const handleClick = () => {
    nav(`/events/${data.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="flex py-2 gap-x-4 items-center border-b-[1px] border-[#a9a9a950] pb-2 hover:bg-gray-100 hover:cursor-pointer"
    >
      <img src={assets.Banner} className="w-10 h-10 rounded-md" />
      <p>Event name</p>
    </div>
  );
};
