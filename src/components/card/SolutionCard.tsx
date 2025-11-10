import React from "react";

import type { Card } from "@src/interfaces/card";

const SolutionCard: React.FC<Card> = ({ title, description, image }) => {
  return (
    <div className="h-[380px] w-auto border border-grey-100 hover:border-black hover:scale-[1.03] transition-transform duration-300 ease-in-out cursor-pointer overflow-hidden">
      <img src={image} className="h-[282px]" alt="solution_card" />
      <div className="px-6 h-[98px]">
        <h3 className="text-[20px] font-bold">{title}</h3>
        <p className="text-[14px] text-grey-400">{description}</p>
      </div>
    </div>
  );
};

export default SolutionCard;
