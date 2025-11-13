import React from "react";

import GridList from "@src/components/cardlist/GridList";
import { internships } from "@src/constants/interships";
import { vacancies } from "@src/constants/vacancies";

const Vacancies = () => {
  return (
    <div className="flex flex-col items-center lg:justify-center border-dashed border-grey-300 border-t border-b py-16 px-4">
      <p className="text-[1.5rem] md:text-[36px] font-bold mb-4">
        Opening Vacancies
      </p>
      <p className="text-[1rem] md:text-[24px] text-grey-700 mb-7 px-12 text-center">
        We're looking for great people to join our growing team
      </p>

      <div className="py-8 w-full max-w-[1100px]">
        <GridList variant="row" cards={vacancies} rowCardVariant="secondary" />
      </div>

      <div className="py-6 md:py-8 w-full max-w-[1100px]">
        <p className="text-[22px] md:text-[28px] font-bold mb-9 md:mb-11 text-center">
          Internship
        </p>
        <GridList
          variant="row"
          cards={internships}
          rowCardVariant="secondary"
        />
      </div>
    </div>
  );
};

export default Vacancies;
