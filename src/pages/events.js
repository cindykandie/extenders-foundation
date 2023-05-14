import CustomHead from '@/components/CustomHead';
import React from 'react';
import { upcomingEvents, pastEvents } from '@/data/events';

export default function Events() {
  return (
    <div className='mt-20'>
      <CustomHead />
      <section className='flex flex-col mx-auto max-w-6xl mt-20'>
        <div className="flex flex-col">
          <h2 className="text-black-600 mb-4 md:mb-0 md:mr-8 text-center font-bold">
            UPCOMING <span className="text-red-600">EVENTS</span>
          </h2>
          <div className="h-0.5 w-8 mx-auto mb-[20px] bg-red-600"></div>
        </div>
        <div className='flex flex-col md:flex-row flex-wrap md:justify-between px-5 justify-center items-center'>
          {upcomingEvents.map((event) => (
            <div key={event.id} className='mb-8 md:mb-0 md:w-1/3'>
              <img src={event.image} alt='Event Image' className='mb-4 rounded-md' />
              <h4 className='text-red-600'>{event.date}</h4>
              <h3>{event.title}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className='flex flex-col mx-auto max-w-6xl mt-20'>
        <div className="flex flex-col">
          <h2 className="text-black-600 mb-4 md:mb-0 md:mr-8 text-center font-bold">
            PAST <span className="text-red-600">EVENTS</span>
          </h2>
          <div className="h-0.5 w-8 mx-auto mb-[20px] bg-red-600"></div>
        </div>
        <div className='flex flex-col md:flex-row flex-wrap md:justify-between px-5 justify-center items-center'>
          {upcomingEvents.map((event) => (
            <div key={event.id} className='mb-8 md:mb-0 md:w-1/3'>
              <img src={event.image} alt='Event Image' className='mb-4 rounded-md' />
              <h4 className='text-red-600'>{event.date}</h4>
              <h3>{event.title}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className='flex flex-col mx-auto max-w-6xl  mt-20'>
        <div className="flex flex-col">
          <h2 className="text-black-600 mb-4 md:mb-0 md:mr-8 text-center font-bold">
            PREVIOUS <span className="text-red-600">VISITS</span>
          </h2>
          <div className="h-0.5 w-8 mx-auto mb-[20px] bg-red-600"></div>
        </div>
        <div className='flex flex-col md:flex-row flex-wrap md:justify-between px-5 justify-center items-center'>
          {upcomingEvents.map((event) => (
            <div key={event.id} className='mb-8 md:mb-0 md:w-1/3'>
              <img src={event.image} alt='Event Image' className='mb-4 rounded-md' />
              <h4 className='text-red-600'>{event.date}</h4>
              <h3>{event.title}</h3>
            </div>
          ))}
        </div>
      </section>
      
    </div>
  );
}
