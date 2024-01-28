"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { steps } from "@/constant";
import { Pagination } from "swiper/modules";
import CustomButtons from "@/components/Customs/CustomButtons";
import Image from "next/image";

const HowitWorksSlider = () => {
  return (
    <div className="py-6 mt-6 flex flex-col md:flex-row items-center justify-center bg-gray-100 gap-6 w-full px-8 xl:px-36">
      <Image
        src="/assets/how.webp"
        alt=""
        height={300}
        width={200}
        className="h-[350px] w-fit md:w-1/3 lg:w-1/4"
      ></Image>
      <div className="w-full md:w-2/3 lg:w-3/4 items-center">
        <p className="text-start my-4 font-medium text-3xl text-gray-800">
          How it Works
        </p>

        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          loop={false}
          pagination={{
            type: "progressbar",
          }}
          speed={500}
          breakpoints={{
            // when window width is >= 420px
            420: {
              slidesPerView: 2,
              spaceBetween: 4,
            },
            // when window width is >= 620px
            520: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            // when window width is >= 640px
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            // when window width is >= 640px
            1020: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            // when window width is .>= 1120px
            1120: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          modules={[Pagination]}
          className="max-w-[100%]"
        >
          {steps.map((step, index) => (
            <SwiperSlide key={index}>
              <div className="my-2 md:my-6 px-2">
                <h1 className="text-2xl font-semibold my-2">{step.h1}</h1>
                <hr className="h-px my-2 border-white border-2 " />
                <h2 className="text-lg font-semibold mt-6 mb-2">{step.h2}</h2>
                <p className="text-sm">{step.desc}</p>
              </div>
            </SwiperSlide>
          ))}

          <CustomButtons />
        </Swiper>
      </div>
    </div>
  );
};

export default HowitWorksSlider;
