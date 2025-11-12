import React from "react";

const AboutUs: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-7 md:gap-9">
      <h1 className="text-[24px] md:text-[36px] font-bold leading-0">
        About Us
      </h1>

      <p className="text-center text-[16px] md:text-[24px] text-grey-500 max-w-[80%] lg:max-w-[70%]">
        Confident and passionate in our capabilities to engineer extraordinary
        products
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 px-8">
        <div className="w-[146px] md:w-[250px] h-13 md:h-22 rounded-sm p-0.5 bg-pink-gradient flex items-center justify-center">
          <div className="w-full h-full bg-pink rounded-xs flex items-center justify-center">
            <p className="text-[20px] md:text-[32px] font-semibold text-pink-gradient">
              Creativity
            </p>
          </div>
        </div>

        <div className="w-[146px] md:w-[250px] h-13 md:h-22  rounded-sm p-0.5 bg-blue-gradient flex items-center justify-center">
          <div className="w-full h-full bg-ocean-100 rounded-xs flex items-center justify-center">
            <p className="text-[20px] md:text-[32px] font-semibold text-blue-gradient">
              Intellect
            </p>
          </div>
        </div>

        <div className="w-[146px] md:w-[250px] h-13 md:h-22  rounded-sm p-0.5 bg-orange-gradient flex items-center justify-center">
          <div className="w-full h-full bg-orange rounded-xs flex items-center justify-center">
            <p className="text-[20px] md:text-[32px] font-semibold text-orange-gradient">
              Dedication
            </p>
          </div>
        </div>
      </div>

      <div className="w-full mt-2">
        <img src="/video.svg" className="w-full object-cover" alt="video" />
      </div>
    </div>
  );
};

export default AboutUs;
