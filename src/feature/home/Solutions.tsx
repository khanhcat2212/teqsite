import React from "react";

import CardSlider from "@src/components/cardlist/CardSlider";
import { solutions } from "@src/constants/cards";

const Solutions: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 md:gap-11 py-24 px-4">
      <h1 className="text-[1.5rem] md:text-[2.25rem] font-bold leading-0">
        Our Solutions
      </h1>

      <p className="text-center text-[1rem] md:text-[1.5rem] text-grey-500 max-w-[80%] lg:max-w-[65%]">
        We have more than 5 years of expertise offering financial service
        solutions, and assisting customers in approaching circumstances flexibly
        and proactively.
      </p>

      <CardSlider cards={solutions} />
    </div>
  );
};

export default Solutions;
