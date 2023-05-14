import React from "react";
import {  TiSocialFacebook } from 'react-icons/ti'
import { MdOutlineEmail } from 'react-icons/md';
import {  AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
export default function BoardMembers({ member }) {
  return (
    <div className="bg-white m-3 p-2 flex flex-col lg:flex-row items-center justify-center gap-8 rounded-sm">
      <img src={member.image} alt="Event Image" className="h-[200px]" />
      <div className="flex flex-col justify-center items-center">
        <h4 className="font-bold text-md">{member.title}</h4>
        <h2 className="font-bold text-red-600 text-xl">{member.name}</h2>
        <p className="leading-2 text-center md:justify-start">{member.text}</p>

        {/* social media icons */}
        <ul className="flex p-4 gap-4 ">
          <li>
            <a href="#">
             <MdOutlineEmail className="h-5 w-5 text-red-400"/>
            </a>
          </li>
          <li>
            <a href="#">
            <TiSocialFacebook className="h-5 w-5 text-red-400"/>          
             </a>
          </li>
          <li>
            <a href="#">
              <AiOutlineInstagram className="h-5 w-5 text-red-400"/>
            </a>
          </li>
          <li>
            <a href="#">
              <AiOutlineTwitter className="h-5 w-5 text-red-400"/>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
