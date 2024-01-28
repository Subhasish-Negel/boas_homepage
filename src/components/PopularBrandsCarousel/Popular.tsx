"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { popularBrands } from "@/constant";
import Image from "next/image";
import { Pagination } from "swiper/modules";
import CustomButtons from "@/components/Customs/CustomButtons";

const PopularBrands = () => {
  return (
    <div className="py-8 mt-20 flex flex-col items-center justify-center bg-gray-100">
      <div className=" max-w-[80%] items-center">
        <p className="text-start my-4 font-medium text-3xl text-gray-800">
          Popular Brands
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
            // when window width is >= 390px
            390: {
              slidesPerView: 2,
              spaceBetween: 4,
            },
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
          modules={[Pagination]}
          className="max-w-[100%] "
        >
          {popularBrands.map((brands, index) => (
            <SwiperSlide key={index}>
              <div className="relative my-2 md:my-6">
                <Image
                  src={brands.cover}
                  alt="Cover Image"
                  height={300}
                  width={200}
                  className="z-10 h-[350px] w-[300px]"
                />
                <Image
                  src={brands.logo}
                  alt="Brand Logo"
                  height={80}
                  width={80}
                  className="absolute inset-0 m-auto"
                />
              </div>
            </SwiperSlide>
          ))}
          <CustomButtons />
        </Swiper>
      </div>
    </div>
  );
};

export default PopularBrands;
