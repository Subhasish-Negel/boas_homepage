"use client";
import React, { useEffect, useState } from "react";

const CountdownTimerMobile = () => {
  const [time, setTime] = useState(13 * 60 * 60); // 13 hours in seconds

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 13 * 60 * 60));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;

  return (
    <div className="flex xs:gap-6 md:hidden flex-col xs:flex-row">
      <div className="text-sm sm:text-lg font-bold my-auto">Price drops in</div>
      <div className="flex font-bold gap-[1.28rem] md:gap-8">
        <div className="flex flex-col text-sm">
          <span className="flex w-full justify-center border-b-2 border-x-0 border-t-0  py-2 px-2 xl:py-2  md:leading-[5rem]  xl:text-[2rem] md:text-xl text-sm shadow-lg ">
            {hours.toString().padStart(2, "0")}
          </span>
          <p>Hours</p>
        </div>
        <div className="flex flex-col text-sm">
          <span className="flex w-full justify-center border-b-2 border-x-0 border-t-0  py-2 px-2 xl:py-2  md:leading-[5rem]  xl:text-[2rem] md:text-xl text-sm shadow-lg ">
            {minutes.toString().padStart(2, "0")}
          </span>
          <p>Minutes</p>
        </div>
        <div className="flex flex-col text-sm">
          <span className="flex w-full justify-center border-b-2 border-x-0 border-t-0  py-2 px-2 xl:py-2  md:leading-[5rem]  xl:text-[2rem] md:text-xl text-sm shadow-lg ">
            {seconds.toString().padStart(2, "0")}
          </span>
          <p>Second</p>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimerMobile;
