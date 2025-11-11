import React from "react";
import clsx from "clsx";

import type { Card } from "@src/interfaces/card";

interface ProductCardProps extends Card {
  onClick?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  isActive,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={clsx(
        "w-[180px] h-32 text-grey-400 bg-grey-900 hover:bg-white-300 hover:text-black hover:font-bold flex flex-col items-center justify-center cursor-pointer",
        isActive && "bg-white-300"
      )}
    >
      <img src={image} className="h-[27px] w-auto max-w-[37px] object-cover" />
      <p
        className={clsx("text-[18px] mt-3", isActive && "text-black font-bold")}
      >
        {title}
      </p>
    </div>
  );
};

export default ProductCard;
