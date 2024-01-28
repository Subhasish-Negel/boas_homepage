import CountdownTimerMobile from "@/components/TimerCountdown/CountDownMobile";
import CountdownTimer from "@/components/TimerCountdown/Countdown";
import React from "react";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row w-full bg-white px-6 xs:px-20 md:px-0 xl:px-36 gap-4">
      <div className="space-y-4 mt-4 md:mt-10 flex flex-col justify-start w-full md:w-1/2 md:pl-10">
        <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold text-start">
          Save Jeans, Save Lives
        </h2>
        <p className="text-sm md:text-lg">
          You save vintage jeans and we donate 90% of profits to save lives.
        </p>
        <div className="flex items-center justify-center lg:justify-start">
          <CountdownTimer />
        </div>
      </div>
      <div className="bg-banner-bg bg-opacity-90 bg-cover bg-bottom h-96 w-full md:w-1/2">
        <div className="w-full h-full bg-white/20 flex justify-center">
          <div className="flex flex-col xs:flex-row justify-center items-center space-y-4 xs:space-y-0 space-x-0 xs:space-x-2 sm:space-x-6 md:space-x-4 lg:space-x-8">
            <button className="bg-gray-900 hover:bg-white text-white text-xs sm:text-sm md:text-base hover:text-black w-20 sm:w-40 md:w-32 xl:w-48 py-3 font-semibold">
              Shop women
            </button>
            <button className="bg-gray-900 hover:bg-white text-white text-xs sm:text-sm md:text-base hover:text-black w-20 sm:w-40 md:w-32 xl:w-48 py-3 font-semibold">
              Shop men
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <CountdownTimerMobile />
      </div>
    </div>
  );
};

export default Banner;
