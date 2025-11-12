import React from "react";

const OurPartners: React.FC = () => {
  return (
    <div className="flex pt-16 flex-col items-center">
      <p className="text-[32px] font-bold text-grey-600 text-center">
        our partners
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-fit pt-9 md:pt-11">
        <div className="w-[116px] md:w-[252px] h-13 md:h-[116px] rounded-sm p-0.5 bg-black-gradient flex items-center justify-center">
          <div className="w-full h-full bg-grey-50 rounded-xs flex items-center justify-center">
            <img
              src="/partners/partner_1.svg"
              className="h-10 md:h-[92px] object-cover"
              alt="partner"
            />
          </div>
        </div>

        <div className="w-[116px] md:w-[252px] h-13 md:h-[116px]  rounded-sm p-0.5 bg-blue-gradient flex items-center justify-center">
          <div className="w-full h-full bg-ocean-100 rounded-xs flex items-center justify-center">
            <img
              src="/partners/partner_2.svg"
              className="h-10 md:h-[92px] object-cover"
              alt="partner"
            />
          </div>
        </div>

        <div className="w-[116px] md:w-[252px] h-13 md:h-[116px] rounded-sm p-0.5 bg-orange-gradient flex items-center justify-center">
          <div className="w-full h-full bg-orange rounded-xs flex items-center justify-center">
            <img
              src="/partners/partner_3.svg"
              className="h-10 md:h-[92px] object-cover"
              alt="partner"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPartners;
