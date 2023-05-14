"use client";
import useMediaQuery from "@/hooks/useMediaQuery";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveSmallScreens = useMediaQuery("(min-width:768px)");

  return (
    <nav className={" w-full fixed top-0 py-4 bg-gray z-10"}>
      <div className="flex items-center justify-between mx-auto w-[90%]">
        <Link href="/">
          <img src="/icons/logo.png" alt="logo" className="h-12" />
        </Link>

        {isAboveSmallScreens ? (
          <div className="flex justify-between items-center gap-8 text-sm font-semibold">
            <Link href="/about">
              <p>ABOUT US</p>
            </Link>

            <Link href="/get-involved">
              <p>GET INVOLVED</p>
            </Link>

            <Link href="/contact-us">
              <p>CONTACT US</p>
            </Link>

            <Link href="/events">
              <p>EVENTS</p>
            </Link>

            <a href="https://donate.stripe.com/test_14k00O9vcesH1os5kk">
            <button className="bg-red-500 hover:bg-red-300 text-white px-3 py-2 rounded-md">
              DONATE
            </button>
            </a>
          </div>
        ) : (
          <div className="">
            <button
              className="rounded-full bg-red-200 p-2 "
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <img alt="menu-icon" src="icons/menu-icon.svg" />
            </button>
          </div>
        )}

        {/* mobile pop up */}
        {!isAboveSmallScreens && isMenuToggled && (
          <div className="fixed right-0 top-0 h-[60%] bg-gray w-[250px]">
            {/* icon */}
            <div className="flex justify-end p-8 ">
              <button
                onClick={() => setIsMenuToggled(!isMenuToggled)}
                className="rounded-full bg-red-200 p-2"
              >
                <img src="/icons/close-icon.svg" alt="close-icon" />
              </button>
            </div>

            {/* menu */}

            <div className="flex flex-col gap-10 ml-[20%] text-xl font-semibold">
              <Link href="/about">
                <p>ABOUT US</p>
              </Link>

              <Link href="/get-involved">
                <p>GET INVOLVED</p>
              </Link>

              <Link href="/contact-us">
                <p>CONTACT US</p>
              </Link>

              <Link href="/events">
                <p>EVENTS</p>
              </Link>

              <a href="https://donate.stripe.com/test_14k00O9vcesH1os5kk">
            <button className="bg-red-500 hover:bg-red-300 text-white px-3 py-2 rounded-md">
              DONATE
            </button>
            </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
