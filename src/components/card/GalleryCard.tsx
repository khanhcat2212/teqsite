import React from "react";

import type { Card } from "@src/interfaces/card";

const GalleryCard: React.FC<Card> = ({ image }) => {
  return (
    <div className="h-[380px] w-[360px] flex flex-col items-center">
      <div className="w-80 h-2.5 bg-grey-100" />
      <div className="w-[340px] h-2.5 bg-grey-350" />
      <div className="relative w-[360px] h-[360px]">
        <img
          src={image}
          alt="gallery_image"
          className="w-90 h-90 object-cover"
        />
        {/* <div className="absolute bottom-6 left-1/2 -translate-x-1/2  flex flex-col justify-center text-white gap-6">
          <h3 className="font-bold whitespace-nowrap text-[36px]">{title}</h3>
          <p className="text-[24px]">{description}</p>
        </div> */}
      </div>
    </div>
  );
};

export default GalleryCard;
