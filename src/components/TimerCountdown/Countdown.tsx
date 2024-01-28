"use client";
import React, { useEffect, useState } from "react";

const CountdownTimer = () => {
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
    <div className="md:flex flex-col lg:flex-row md:gap-2 lg:gap-6 hidden">
      <div className="text-2xl lg:text-3xl xl:text-4xl font-bold my-auto">Price drops in</div>
      <div className="flex font-bold gap-4 xl:gap-8">
        <div className="flex flex-col">
          <span className="flex w-full justify-center border-b-2 border-x-0 border-t-0  py-2 xl:py-2  md:leading-[5rem]  xl:text-[2rem] md:text-xl text-base shadow-lg ">
            {hours.toString().padStart(2, "0")}
          </span>
          <p className="text-sm xl:text-base">Hours</p>
        </div>
        <div className="flex flex-col">
          <span className="flex w-full justify-center border-b-2 border-x-0 border-t-0  py-2 px-2 xl:py-2  md:leading-[5rem]  xl:text-[2rem] md:text-xl text-base shadow-lg ">
            {minutes.toString().padStart(2, "0")}
          </span>
          <p className="text-sm xl:text-base">Minutes</p>
        </div>
        <div className="flex flex-col">
          <span className="flex w-full justify-center border-b-2 border-x-0 border-t-0  py-2 px-2 xl:py-2  md:leading-[5rem]  xl:text-[2rem] md:text-xl text-base shadow-lg ">
            {seconds.toString().padStart(2, "0")}
          </span>
          <p className="text-sm xl:text-base">Second</p>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
