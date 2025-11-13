import GridList from "@src/components/cardlist/GridList";
import Subject from "@src/components/subject/Subject";
import { benefits } from "@src/constants/benefits";
import { lifes } from "@src/constants/lifes";
import { workings } from "@src/constants/workings";

const OurBenefit = () => {
  return (
    <div className="flex flex-col px-8 pb-12 lg:px-44 bg-grey-50">
      <div className="flex flex-col w-full max-w-[595px]">
        <Subject title="OUR BENEFIT" />
      </div>

      <div className="flex flex-col w-full max-w-7xl gap-7">
        <p className="text-[16px] md:text-[18px] font-semibold mt-8">
          Compensation and benefits
        </p>
        <GridList variant="jd" cards={benefits} />
      </div>

      <div className="flex flex-col w-full max-w-7xl gap-7">
        <p className="text-[16px] md:text-[18px] font-semibold mt-8">
          Spritual life
        </p>
        <GridList variant="jd" cards={lifes} />
      </div>

      <div className="flex flex-col w-full max-w-7xl gap-7">
        <p className="text-[16px] md:text-[18px] font-semibold mt-8">
          Working time and place of working time
        </p>
        <GridList variant="jd" cards={workings} />
      </div>
    </div>
  );
};

export default OurBenefit;
