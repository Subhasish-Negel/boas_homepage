import Link from "next/link";
import React from "react";
import { subNavItems } from "@/constant";

const Subnav = () => {
  return (
    <div className="md:flex justify-center items-center space-x-4 font-semibold hidden">
      {subNavItems.map((item) => (
        <div className="whitespace-nowrap" key={item.name}>
          {item.submenu ? (
            <div className="dropdown dropdown-hover">
              <div tabIndex={0} role="button" className="my-2">
                <Link href={item.href}>
                  <ul className="">
                    <li>
                      <div className="flex space-x-1 text-black hover:text-black/60 active:scale-110  transition-all ease-in-out delay-0">
                        <span>{item.name}</span>
                      </div>
                    </li>
                  </ul>
                </Link>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu shadow bg-gray-100  rounded-lg w-52 border border-black/10 p-0"
              >
                {item.submenu.map((subitem) => (
                  <li
                    key={subitem.name}
                    className="font-semibold hover:bg-gray-300  hover:rounded-lg hover:text-slate-900 active:text-slate-950 text-black rounded-box"
                  >
                    <Link href={subitem.href}>
                      <span className="rounded-2xl">{subitem.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-300 dark:hover:bg-gray-600 dark:bg-opacity-95 hover:bg-gray-300 hover:bg-opacity-95 rounded-2xl"
            >
              <div className="dark:text-white flex space-x-1 text-black mr-2">
                <span>{item.name}</span>
              </div>
            </Link>
          )}
        </div>
      ))}
    </div>
  );
};

export default Subnav;
