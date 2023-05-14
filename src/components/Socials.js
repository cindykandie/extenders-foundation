import React from 'react';


export default function Socials() {
  return (
    <div className="bg-black text-white py-8 pb-0 mt-6">
          <ul className="flex gap-9">
        <li>
        <a href="#" className="hover:underline">
            <img src="/icons/mail.svg" alt="Email Icon" />
        </a>
        </li>
        <li>
        <a href="#" className="hover:underline">
            <img src="/icons/facebook.svg" alt="Facebook Icon" />
        </a>
        </li>
        <li>
        <a href="#" className="hover:underline">
            <img src="/icons/instagram.svg" alt="Instagram Icon" />
        </a>
        </li>
        <li>
        <a href="#" className="hover:underline">
            <img src="/icons/twitter.svg" alt="Twitter Icon" />
        </a>
        </li>
    </ul>
    </div>
  );
}
