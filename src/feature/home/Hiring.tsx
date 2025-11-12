import React from "react";
import { useMediaQuery } from "react-responsive";

import Button from "@src/components/button/Button";
import RowCard from "@src/components/card/RowCard";
import { timelines } from "@src/constants/timelines";
import { vacancies } from "@src/constants/vacancies";

import Timeline from "./Timeline";

const Hiring: React.FC = () => {
  const isLg = useMediaQuery({ minWidth: 1024 });
  const isMd = useMediaQuery({ minWidth: 768 });

  const hirings = vacancies.slice(0, 3);
  return (
    <div className="flex flex-col items-center lg:justify-center border-dashed border-grey-300 border-t border-b py-16">
      <p className="text-[24px] md:text-[36px] font-bold mb-4">We Are Hiring</p>
      <p className="text-[16px] md:text-[24px] text-grey-700 mb-7 px-12 text-center">
        Become a part of our team and build your bright future
      </p>

      <Button variant="primary" size={isLg ? "lg" : isMd ? "md" : "sm"}>
        JOIN US
      </Button>

      <div className="hidden lg:flex items-center gap-10 py-8">
        <div className="w-1/2">
          <img src="/map.svg" className="w-full object-cover" alt="sample" />
        </div>

        <div className="w-1/2 max-w-[522px] flex flex-col gap-8">
          {hirings.map((card, index) => (
            <RowCard key={index} {...card} />
          ))}
        </div>
      </div>

      <div className="hidden md:flex lg:hidden relative items-center justify-center py-24">
        <div className="w-full flex justify-end">
          <img src="/map.svg" className="w-[75%] object-cover" alt="sample" />
        </div>

        <div className="absolute left-0 top-1/2 -translate-y-1/2">
          <Timeline cards={timelines} />
        </div>
      </div>

      <div className="block md:hidden w-full px-4 py-8">
        <img src="/map.svg" className="w-full object-cover" alt="sample" />
      </div>

      <div className="hidden lg:flex items-center max-w-250 w-full">
        <Timeline cards={timelines} />
      </div>

      <div className="flex items-center justify-center md:hidden max-w-250 w-full py-8">
        <Timeline cards={timelines} />
      </div>

      <div className="flex flex-col max-w-[522px] lg:hidden gap-8 px-4">
        {hirings.map((card, index) => (
          <RowCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Hiring;
