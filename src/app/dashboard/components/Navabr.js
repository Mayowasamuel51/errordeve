"use client";
import React, { useState } from "react";
import Link from "next/link";
import Profile from "./Profile";
import Image from "next/image";

const Navabr = (props) => {
  const [notif, setNotif] = useState(false);
  const handleNotif = () => {
    setNotif((prev) => !prev);
  };

  return (
    <>
      <header className="w-full relative bg-slate-50 p-1 shadow-md">
        <div className="flex flex-1 justify-between items-center align-middle mx-auto py-2.5">
          <Link className="mx-4 relative " href="/dashboard">
            {/* <Image
              src={props.Profile}
              alt={props.Profile}
              className="relative  md:w-[80px] md:h-[60px] w-[60px] h-[60px] rounded-full "
              width={500}
              height={500}
            /> */}
          </Link>
          {/* <Searchbar /> */}
          <div className="w-full md:flex gap-10 items-center justify-center hidden">
            {/* <Link href="/" className="text-base">
              Courses
            </Link> */}

            <Link href="/dashboard" className="text-base" style={{textDecoration:'none'}}>
              Home
            </Link>
  

            <Link href="/dashboard/storeerror" className="text-base">
             Store Error Fix
            </Link>
            <Link href="/dashboard/websiteurl" className="text-base">
             Keep website Url's 
            </Link>
            <Link href="/dashboard/portfolio" className="text-base">
              Add Portfoillo's website
            </Link>
            {/* <Link href="/dashboard/portfolio" className="text-base">
             Todo List
            </Link> */}
            <Link href="/dashboard/apikey" className="text-base">
             Api key's
            </Link>
           
          </div>
          {/* <Notification notif={notif} /> */}
          <div className="mx-2 flex justify-center items-center float-right relative cursor-pointer">
            <button
              onClick={handleNotif}
              className="text-lg mx-10 inline-block bg-transparent"
            >
            
            </button>
            <Profile />
          </div>
        </div>
      </header>
    </>
  );
};

export default Navabr;
