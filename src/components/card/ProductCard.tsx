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
        "w-45 h-32 text-grey-400 bg-grey-900 hover:bg-white-300 hover:text-black hover:font-bold flex flex-col items-center justify-center cursor-pointer",
        isActive && "bg-white-300"
      )}
    >
      <img
        src={image}
        className="h-6.75 w-auto max-w-9.25 object-cover"
        alt={title}
      />
      <p
        className={clsx(
          "text-[1.125rem] mt-3",
          isActive && "text-black font-bold"
        )}
      >
        {title}
      </p>
    </div>
  );
};

export default ProductCard;
