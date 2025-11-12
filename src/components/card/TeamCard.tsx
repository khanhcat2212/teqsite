import React from "react";

import type { Card } from "@src/interfaces/card";

const TeamCard: React.FC<Card> = ({ title, image, description }) => {
  return (
    <div className="w-full max-w-135 h-117.25 border-l-2 border-grey-350 bg-white-900">
      <div className="w-full h-27 flex flex-col justify-center px-7.5 gap-1">
        <h3 className="text-[1.375rem] font-semibold">{title}</h3>
        <p className="text-[1.125rem]">{description}</p>
      </div>
      <div className="w-full h-90.25 flex items-center justify-center bg-grey-150">
        <img src={image} alt="team" className="w-[70%] h-auto object-cover" />
      </div>
    </div>
  );
};

export default TeamCard;
