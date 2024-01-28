import Image from "next/image";
import { TbMoneybag } from "react-icons/tb";
import { IoIosMenu } from "react-icons/io";
import { RiAccountCircleLine } from "react-icons/ri";
import { FiShoppingCart } from "react-icons/fi";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="drawer h-16 px-4 lg:px-20 xl:px-40 py-12">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar bg-white flex justify-between">
          <div className="flex md:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <IoIosMenu className="text-3xl" />
            </label>
          </div>

          <ul className="space-x-8 font-semibold text-lg hidden md:block">
            <Link href="/">Women</Link>
            <Link href="/">Men</Link>
            <Link href="/">All Vintage</Link>
          </ul>

          <div className="flex px-2">
            <Image src="/boas_logo.svg" height={80} width={80} alt=""></Image>
          </div>
          <div>
            <ul className="flex space-x-4">
              <Link
                className="items-center hidden md:flex font-semibold"
                href="/"
              >
                About Us
              </Link>

              <Link className="text-center text-xs" href="/">
                <TbMoneybag className="text-xl mx-auto" />
                Invest
              </Link>

              <Link className="text-center text-xs" href="/">
                <RiAccountCircleLine className="text-xl mx-auto" />
                Account
              </Link>

              <Link className="text-center text-xs" href="/">
                <FiShoppingCart className="text-xl mx-auto" />
                Cart
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <ul className="menu p-4 w-80 min-h-full bg-base-200 font-medium z-50 text-lg text-pretty space-y-2">
          {/* Sidebar content here */}

          <Link className="hover:bg-gray-400 p-2 rounded-lg" href="/">Women</Link>

          <Link className="hover:bg-gray-400 p-2 rounded-lg" href="/">Men</Link>

          <Link className="hover:bg-gray-400 p-2 rounded-lg" href="/">All Vintage</Link>

          <Link className="hover:bg-gray-400 p-2 rounded-lg" href="/">About Us</Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
