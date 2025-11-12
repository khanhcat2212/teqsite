import React from "react";

const JoinUs: React.FC = () => {
  return (
    <div className="h-[688px] flex justify-center overflow-y-hidden">
      <div className="flex flex-col items-center h-55 w-full">
        <h1 className="text-[24px] md:text-[36px] font-bold">Join Us.</h1>

        <p className="text-[18px] md:text-[24px] text-black-100 mt-4 max-w-150 md:max-w-500 text-center">
          Become a part of our team and build your bright future.
        </p>
        <img src="/map.svg" className="h-[496px] object-cover mt-8" alt="map" />
      </div>
    </div>
  );
};

export default JoinUs;
