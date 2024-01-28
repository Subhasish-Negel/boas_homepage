import React from "react";
import { useSwiper } from "swiper/react";
import "swiper/css/navigation";

const CustomButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flex justify-between">
      <button
        className="bg-cyan-600 py-2 px-3 rounded-xl text-white font-medium"
        onClick={() => {
          swiper.slidePrev();
        }}
      >
        Prev
      </button>
      <button
        className="bg-cyan-600 py-2 px-3 rounded-xl text-white font-medium "
        onClick={() => {
          swiper.slideNext();
        }}
      >
        Next
      </button>
    </div>
  );
};

export default CustomButtons;
