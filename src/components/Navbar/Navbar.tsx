import Image from "next/image";
import { TbMoneybag } from "react-icons/tb";
import { IoIosMenu } from "react-icons/io";
import { RiAccountCircleLine } from "react-icons/ri";
import { FiShoppingCart } from "react-icons/fi";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      {/* Main Navbar */}

      <div className="flex justify-between px-10">
        {/* Side Nav */}
        <div className="drawer md:hidden">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label
              htmlFor="my-drawer"
              className="btn  drawer-button bg-transparent shadow-none btn-square border-none"
            >
              <IoIosMenu className="text-2xl" />
            </label>
          </div>
          <div className="sideNav drawer-side">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
              {/* Sidebar content here */}
              <li>
                <Link href="/">Women</Link>
              </li>
              <li>
                <Link href="/">Men</Link>
              </li>
              <li>
                <Link href="/">All Vintage</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="hidden md:block">
          <ul className="flex gap-6 font-semibold">
            <li className="flex items-center">
              <Link href="/">Women</Link>
            </li>
            <li>
              <Link href="/">Men</Link>
            </li>
            <li>
              <Link href="/">All Vintage</Link>
            </li>
          </ul>
        </div>
        <Image
          src="/boas_logo.svg"
          alt="Company Logo"
          width={100}
          height={100}
          className="absolute top-0 left-1/2"
        />
        <div>
          <ul className="flex space-x-4">
            <li className="items-center hidden md:flex font-semibold">
              <Link href="/">About Us</Link>
            </li>
            <li className="text-center text-xs">
              <Link href="/">
                <TbMoneybag className="text-xl mx-auto" />
                Invest
              </Link>
            </li>
            <li className="text-center text-xs">
              <Link href="/">
                {" "}
                <RiAccountCircleLine className="text-xl mx-auto" />
                Account
              </Link>
            </li>
            <li className="text-center text-xs">
              <Link href="/">
                <FiShoppingCart className="text-xl mx-auto" />
                Cart
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
