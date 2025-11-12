import React, { useState } from "react";

import ProductDetailCard from "@src/components/card/ProductDetailCard";
import ProductList from "@src/components/cardlist/ProductList";
import { products } from "@src/constants/products";

const OurProducts: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="hidden md:flex mt-12 flex-col">
      <p className="text-[32px] font-bold text-grey-600 text-center">
        our products
      </p>

      <div className="py-8.5">
        <ProductList
          cards={products}
          activeIndex={activeIndex}
          onCardClick={(index) => setActiveIndex(index)}
        />
      </div>

      <div className="flex w-full justify-center">
        {activeIndex != null && (
          <ProductDetailCard {...products[activeIndex]} />
        )}
      </div>
    </div>
  );
};

export default OurProducts;
