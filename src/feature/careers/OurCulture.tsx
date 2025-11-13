import React from "react";

import Subject from "@src/components/subject/Subject";

const OurCulture: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between px-8 gap-12 lg:gap-20 py-12 lg:px-44 bg-grey-50">
      <div className="flex flex-col w-full max-w-[595px]">
        <Subject title="OUR CULTURE" />
        <p className="text-[18px] md:text-[24px] mt-5">
          We cultivate a warm and collaborative environment that sparks
          creativity. With outstanding benefits, we prioritize employee
          well-being and growth.
        </p>
      </div>

      <div className="flex flex-col gap-8">
        <div className="flex items-center gap-3 text-[16px]">
          <img src="/check_icon.svg" className="w-5 h-5" alt="check_icon" />
          <p>
            We excels with <b>streamlined processes.</b>
          </p>
        </div>

        <div className="flex items-center gap-3 text-[16px]">
          <img src="/check_icon.svg" className="w-5 h-5" alt="check_icon" />
          <p>
            <b>Innovative</b> company with creative technology.
          </p>
        </div>

        <div className="flex items-center gap-3 text-[16px]">
          <img src="/check_icon.svg" className="w-5 h-5" alt="check_icon" />
          <p>Collaboration centered on community.</p>
        </div>

        <div className="flex items-center gap-3 text-[16px]">
          <img src="/check_icon.svg" className="w-5 h-5" alt="check_icon" />
          <p>Assured quality, exceeding expectations.</p>
        </div>
      </div>
    </div>
  );
};

export default OurCulture;
