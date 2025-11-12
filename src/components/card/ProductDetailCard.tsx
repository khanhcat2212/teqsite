import React from "react";

import type { Card } from "@src/interfaces/card";

const ProductDetailCard: React.FC<Card> = ({
  image,
  title,
  description,
  extendImage,
}) => {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex items-center justify-center gap-4">
        <div className="flex items-center gap-2">
          <img src={image} className="h-6 object-cover" alt="icon" />
          <p className="text-[1.25rem] font-bold">{title}</p>
        </div>

        <div className="h-7 w-0.5 bg-grey-350" />

        <p className="text-[1rem] lg:text-[1.125rem] text-grey-500 whitespace-nowrap">
          {description}
        </p>
      </div>

      <div className="max-w-screen lg-w-[59.375rem] bg-grey-150 rounded-md p-2 flex items-center justify-center">
        <img src={extendImage} className="w-full object-cover" alt="sample" />
      </div>
    </div>
  );
};

export default ProductDetailCard;
