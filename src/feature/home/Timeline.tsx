import React from "react";

import type { Card } from "@src/interfaces/card";

interface TimelineProps {
  cards: Card[];
}

const Timeline: React.FC<TimelineProps> = ({ cards }) => {
  return (
    <>
      <div className="relative w-full hidden lg:flex flex-col items-center justify-center">
        <div className="absolute bottom-11.25 left-0 w-full h-0.5 bg-linear-to-r from-gray-200 via-black-100 to-gray-200 z-0"></div>

        <div className="relative w-full flex justify-between px-[5%] max-w-6xl z-10">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center text-center"
              style={{ width: `${100 / cards.length}%` }}
            >
              {/* Icon */}
              <div className="w-[70px] h-[70px] border-2 border-black rounded-full flex items-center justify-center">
                <img src={card.image} alt={card.title} className="w-6 h-6" />
              </div>

              {/* Dashed line connector */}
              <div className="h-7 border-l-2 border-dashed border-gray-400"></div>

              {/* Dot (nằm đúng vị trí line gốc) */}
              <div className="w-3 h-3 bg-gray-800 rounded-full"></div>

              {/* Title */}
              <span className="text-black text-lg font-medium mt-3">
                {card.title}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="relative h-[464px] flex lg:hidden flex-col justify-center">
        <div className="absolute top-0 w-0.5 h-116 bg-linear-to-b from-gray-200 via-black-100 to-gray-200 z-0"></div>

        <div className="relative flex flex-col gap-12 z-10">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative flex items-center text-center"
              style={{ height: `${100 / cards.length}%` }}
            >
              {/* Dot */}
              <div className="w-3 h-3 bg-gray-800 rounded-full"></div>

              {/* Dashed line connector */}
              {index < cards.length && (
                <div className="w-7 border-b-2 border-dashed border-gray-400"></div>
              )}

              {/* Icon */}
              <div className="w-17.5 h-17.5 border-2 border-black rounded-full flex items-center justify-center bg-white mt-2">
                <img src={card.image} alt={card.title} className="w-6 h-6" />
              </div>

              {/* Title */}
              <span className="text-black text-[18px] font-medium ml-4">
                {card.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Timeline;
