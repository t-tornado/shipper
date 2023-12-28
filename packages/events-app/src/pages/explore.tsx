import { assets } from "../assets";
import React from "react";

export const ExploreEvent = () => {
  const handleOnClickEvent = () => {
    alert("Ticket Booked");
  };
  return (
    <div className='w-screen h-screen flex flex-col overflow-auto'>
      <div className='grid grid-cols-3 gap-x-20 shrink-0 mx-auto pl-10'>
        <section className='col-span-1 flex flex-col'>
          <h4 className='text-3xl font-bold mb-5'>Event Organizer</h4>
          <p className='mb-5'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repudiandae architecto, quos amet, voluptatibus debitis libero et
            soluta placeat ratione impedit rerum. Et blanditiis eveniet quidem
            numquam nam in dicta qui modi earum recusandae eius totam iusto
            veritatis dolorem cupiditate velit quae atque commodi vitae
            dignissimos, debitis culpa? Natus, officia dicta.
          </p>
          <div className='mt-auto'>
            <div className='flex text-[#a9a9a9] items-center gap-x-2  mb-5'>
              <span className=''>Event Date</span>
              <div className='h-4 w-[2px] bg-[#a9a9a9]' />
              <span className=''>Event venue</span>
            </div>
            <button
              onClick={handleOnClickEvent}
              className='w-[200px] p-4 py-3 bg-blue-400 rounded-md'
            >
              Book Ticket
            </button>
          </div>
        </section>
        <section className='col-span-2'>
          <img
            src={assets.Banner}
            className='object-fit h-[500px] w-[70%] rounded-xl'
          />
        </section>
      </div>
    </div>
  );
};
