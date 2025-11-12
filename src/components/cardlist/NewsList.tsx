import React from "react";

import type { Card } from "@src/interfaces/card";

import NewsCard from "../card/NewsCard";

interface NewsListProps {
  cards: Card[];
}

const NewsList: React.FC<NewsListProps> = ({ cards }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="flex flex-col items-center justify-between w-full max-w-310">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cards.map((card, index) => (
            <NewsCard key={index} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsList;
