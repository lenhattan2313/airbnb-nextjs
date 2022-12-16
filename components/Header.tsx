import Image from "next/image";
import React, { useState } from "react";
import {
  AiOutlineSearch,
  AiOutlineGlobal,
  AiOutlineUser,
  AiOutlineMenu,
  AiOutlineUsergroupAdd,
} from "react-icons/ai";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/router";

type Props = {
  placeholder?: string;
};

const Header = ({ placeholder = "" }: Props) => {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [numberOfGuest, setNumberOfGuest] = useState(1);
  const router = useRouter();
  const selectionRange = {
    startDate,
    endDate,
    key: "selection",
  };
  const handleSelect = (ranges: any) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };
  const handleSearch = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toJSON(),
        endDate: endDate.toJSON(),
        numberOfGuest,
      },
    });
  };
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          alt="Airbnb"
          fill
          className="object-contain object-left"
          onClick={() => router.push("/")}
        />
      </div>
      <div className="flex items-center md:border-2 md:shadow-sm rounded-full py-2 flex-1">
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder={placeholder || "Start your search"}
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
      {/* Calender */}
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto mt-5">
          <DateRangePicker
            ranges={[selectionRange]}
            onChange={handleSelect}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of guests
            </h2>
            <AiOutlineUsergroupAdd className="h-6 w-6" />
            <input
              type="number"
              value={numberOfGuest}
              min={1}
              onChange={(e) => setNumberOfGuest(parseInt(e.target.value))}
              className="w-12 pl-2 text-lg outline-none text-red-400"
            />
          </div>
          <div className="flex ">
            <button
              className="flex-grow text-gray-500"
              onClick={() => setSearchInput("")}
            >
              Cancel
            </button>
            <button className="flex-grow text-red-400" onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
