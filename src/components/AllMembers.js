import React from "react";

export default function AllMembers({ memba }) {
  return (
    <div className="flex flex-col items-center justify-center mt-2 md:mt-0">
      <img src={memba.image} alt="Event Image" className="rounded-full h-[100px] w-[100px]" />
      <h4 className="font-semibold mt-1">{memba.name}</h4>
      <p>{memba.text}</p>
      
    </div>
  );
}
