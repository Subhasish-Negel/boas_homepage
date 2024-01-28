import Navbar from "@/components/Navbar/Navbar";
import Subnav from "@/components/Subnav/Subnav";
import React from "react";

const Header = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <Subnav />
      <span className="hidden md:block mt-2 h-[28px] w-full text-center bg-black/90 text-white text-pretty py-1 text-sm">
        FREE SHIPPING OVER €29
      </span>
    </div>
  );
};

export default Header;
