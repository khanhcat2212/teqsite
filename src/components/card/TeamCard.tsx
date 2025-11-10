import React from "react";

import type { Card } from "@src/interfaces/card";

const TeamCard: React.FC<Card> = ({ title, image, description }) => {
  return (
    <div className="w-[540px] h-[469px] border-l-2 border-grey-350 bg-white-900">
      <div className="w-full h-[108px] flex flex-col justify-center px-7.5 gap-1">
        <h3 className="text-[22px] font-semibold">{title}</h3>
        <p className="text-[18px]">{description}</p>
      </div>
      <div className="w-full h-[361px] flex items-center justify-center bg-grey-150">
        <img src={image} alt="team" className="h-[255px] object-cover" />
      </div>
    </div>
  );
};

export default TeamCard;
