import React from "react";

import type { Card } from "@src/interfaces/card";

import GalleryCard from "../card/GalleryCard";

interface GalleryListProps {
  cards: Card[];
}

const GalleryList: React.FC<GalleryListProps> = ({ cards }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="flex flex-col items-center justify-between w-full max-w-310">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {cards.map((card, index) => (
            <GalleryCard key={index} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryList;
