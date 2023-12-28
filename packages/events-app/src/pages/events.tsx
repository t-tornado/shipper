import React from "react";
import { LatestEvent } from "../components/LatestEvent";
import { Event } from "../components/Event";

const mainEvents = [{ id: "aaa1" }, { id: "aaa2" }, { id: "aaa3" }];

export const Events = () => {
  return (
    <div className="w-screen h-screen px-10 pt-5 grid grid-cols-3">
      <section className="col-span-2 border-r-[1px] border-[#a9a9a9]">
        <h1 className="text-4xl text-black font-bold">
          DISCOVER OUR LATEST EVENTS
        </h1>
        <div className="flex flex-col gap-y-5 mt-10">
          {mainEvents.map((ev): any => (
            <LatestEvent key={ev.id} data={ev} />
          ))}
        </div>
      </section>
      <section className="col-span-1 flex flex-col gap-y-4 px-4 mt-20">
        <h2 className="text-xl font-bold text-black">Events</h2>
        {mainEvents.map((ev): any => (
          <Event key={ev.id} data={ev} />
        ))}
      </section>
    </div>
  );
};
