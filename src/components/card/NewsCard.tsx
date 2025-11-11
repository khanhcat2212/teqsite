import React from "react";

import type { Card } from "@src/interfaces/card";

const NewsCard: React.FC<Card> = ({ title, image, description }) => {
  return (
    <div className="max-w-[399px] max-h-[374px] p-1.5 w-full h-full rounded-md border border-grey-100 hover:border-black flex items-center justify-center hover:scale-[1.03] transition-transform duration-300 ease-in-out bg-grey-900 cursor-pointer">
      <div className="max-w-[389px] max-h-[362px] w-full h-full rounded-md bg-white overflow-hidden">
        <img
          src={image}
          alt="news"
          className="w-full max-h-[282px] object-cover"
        />

        <div className="px-6 py-3 h-20 gap-0.5">
          <h3 className="text-[20px] font-semibold">{title}</h3>
          <p className="text-[14px] text-grey-400">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
