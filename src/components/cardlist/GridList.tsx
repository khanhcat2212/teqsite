import React from "react";
import clsx from "clsx";

import type { Card } from "@src/interfaces/card";

import CapabilityCard from "../card/CapabilityCard";
import DescriptionCard from "../card/DescriptionCard";
import RowCard from "../card/RowCard";
import TeamCard from "../card/TeamCard";
import Subject from "../subject/Subject";

interface AboutListProps {
  cards: Card[];
  subject?: string;
  variant: "capability" | "team" | "row" | "jd";
}

const GridList: React.FC<AboutListProps> = ({ cards, subject, variant }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div
        className={clsx(
          "flex flex-col gap-10 w-full max-w-270",
          variant === "row" && "max-w-276"
        )}
      >
        {subject && <Subject title={subject} />}
        <div
          className={clsx(
            "grid grid-cols-1 md:grid-cols-2 gap-1",
            variant === "row" && "gap-6",
            variant === "jd" && "gap-6"
          )}
        >
          {cards.map((card, index) =>
            variant === "capability" ? (
              <CapabilityCard key={index} {...card} />
            ) : variant === "team" ? (
              <TeamCard key={index} {...card} />
            ) : variant === "row" ? (
              <RowCard key={index} {...card} />
            ) : (
              <DescriptionCard key={index} {...card} />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default GridList;
