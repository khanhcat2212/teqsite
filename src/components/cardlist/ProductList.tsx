import React from "react";

import type { Card } from "@src/interfaces/card";

import ProductCard from "../card/ProductCard";

interface ProductListProps {
  cards: Card[];
  activeIndex?: number | null;
  onCardClick?: (index: number) => void;
}

const ProductList: React.FC<ProductListProps> = ({
  cards,
  activeIndex,
  onCardClick,
}) => {
  return (
    <div className="w-full h-31.75 bg-grey-900 border-t-2 border-b-2 border-grey-950 flex items-center justify-center">
      <div className="hidden md:flex lg:hidden overflow-x-auto w-full px-2 scrollbar-none">
        {cards.map((card, index) => (
          <div key={index} className="flex-none w-[calc(100%/4)]">
            <ProductCard
              {...card}
              isActive={activeIndex === index}
              onClick={() => onCardClick?.(index)}
            />
          </div>
        ))}
      </div>
      <div className="hidden lg:flex gap-0 w-full justify-center">
        {cards.map((card, index) => (
          <ProductCard
            key={index}
            {...card}
            isActive={activeIndex === index}
            onClick={() => onCardClick?.(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
