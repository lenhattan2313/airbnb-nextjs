import { ExploreData } from "@/pages";
import Image from "next/image";
import React from "react";

type Props = {
  explore: ExploreData;
};

const SmallCard = ({ explore }: Props) => {
  console.log({ explore });
  return (
    <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:scale-105 hover:bg-gray-100 transition transform duration-150 ease-out ">
      <div className="relative h-16 w-16">
        <Image
          src={explore.img}
          alt={explore.location}
          fill
          className="rounded-lg"
        />
      </div>
      <div>
        <h2>{explore.location}</h2>
        <h3 className="text-gray-500">{explore.distance}</h3>
      </div>
    </div>
  );
};

export default SmallCard;
