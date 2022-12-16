import { SearchData } from "@/pages/search";
import Image from "next/image";
import React from "react";
import { AiOutlineHeart, AiFillHeart, AiFillStar } from "react-icons/ai";
type Props = {
  search: SearchData;
};

const InfoCard = ({ search }: Props) => {
  return (
    <div className="flex py-7 px-2 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-150 ease-out first:border-t">
      <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
        <Image
          src={search.img}
          alt={search.title}
          fill
          className="object-cover rounded-2xl"
        />
      </div>
      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between">
          <p>{search.location}</p>
          <AiOutlineHeart className="w-7 h-7 cursor-pointer" />
        </div>
        <h4 className="text-xl">{search.title}</h4>
        <div className="border-b w-10 pt-2" />
        <p className="pt-2 text-sm text-gray-500 flex-grow">
          {search.description}
        </p>
        <div className="flex justify-between items-end pt-5">
          <p className="flex items-center">
            <AiFillStar className="w-5 h-5 text-red-400" />
            {search.star}
          </p>
          <div>
            <p className="text-lg font-semibold pb-2 lg:text-2xl">
              {search.price}
            </p>
            <p className="text-right font-extralight">{search.total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
