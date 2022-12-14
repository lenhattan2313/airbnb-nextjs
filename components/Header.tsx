import Image from "next/image";
import React from "react";
import {
  AiOutlineSearch,
  AiOutlineGlobal,
  AiOutlineUser,
  AiOutlineMenu,
} from "react-icons/ai";
type Props = {};

const Header = (props: Props) => {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          alt="Airbnb"
          fill
          className="object-contain object-left"
        />
      </div>
      <div className="flex items-center md:border-2 md:shadow-sm rounded-full py-2 flex-1">
        <input
          type="text"
          placeholder="Start your search"
          className="pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400 flex-grow"
        />
        <AiOutlineSearch className="hidden md:inline-flex flex-shrink-0 h-8 w-8 text-white bg-red-400 rounded-full p-2 cursor-pointer mr-2" />
      </div>
      <div className="flex space-x-4 items-center justify-end text-gray-500">
        <p className="hidden md:inline whitespace-nowrap cursor-pointer">
          Become a host
        </p>
        <AiOutlineGlobal className="h-6 w-6" />
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <AiOutlineMenu className="h-6 w-6" />
          <AiOutlineUser className="h-6 w-6" />
        </div>
      </div>
    </header>
  );
};

export default Header;
