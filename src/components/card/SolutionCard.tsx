import React from "react";

import type { Card } from "@src/interfaces/card";

const SolutionCard: React.FC<Card> = ({ title, description, image }) => {
  return (
    <div className="h-95 w-full min-w-90 max-w-97.5 border border-grey-100 hover:border-black transition-transform duration-300 ease-in-out cursor-pointer overflow-hidden">
      <img src={image} className="h-70.5" alt="solution_card" />
      <div className="px-6 h-24.5">
        <h3 className="text-[1.25rem] font-bold">{title}</h3>
        <p className="text-[.875rem] text-grey-400">{description}</p>
      </div>
    </div>
  );
};

export default SolutionCard;
