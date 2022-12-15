import { CardData } from "@/pages";
import Image from "next/image";
import React from "react";

type Props = {
  card: CardData;
};

const MediumCard = ({ card }: Props) => {
  return (
    <div className="cursor-pointer hover:scale-105 transition transform duration-150 ease-out">
      <div className="relative h-80 w-80">
        <Image src={card.img} alt={card.title} fill className='rounded-xl'/>
      </div>
      <h3 className="text-3xl mt-3">{card.title}</h3>
    </div>
  );
};

export default MediumCard;
