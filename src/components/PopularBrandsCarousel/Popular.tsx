"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { popularBrands } from "@/constant";
import Image from "next/image";
import { Navigation } from "swiper/modules";

const PopularBrands = () => {
  return (
    <div className="mt-20 flex items-center justify-center bg-cover bg-center">
      <div className="flex flex-col gap-20 max-w-[80%] text-center items-center">
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          navigation={true}
          speed={500}
          breakpoints={{
            // when window width is >= 640px
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            // when window width is .>= 1020px
            1020: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          modules={[Navigation]}
          className="max-w-[100%] "
        >
          {popularBrands.map((brands, index) => (
            <SwiperSlide key={index}>
              <div className="relative">
                <Image
                  src={brands.cover}
                  alt=""
                  height={200}
                  width={200}
                  className="z-10 h-[350px] w-[300px]"
                />
                <Image
                  src={brands.logo}
                  alt=""
                  height={80}
                  width={80}
                  className="absolute inset-0 flex items-center my-auto mx-auto"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PopularBrands;
