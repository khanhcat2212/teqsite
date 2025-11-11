import React from "react";
import clsx from "clsx";

import type { Card } from "@src/interfaces/card";

interface RowCardProps extends Card {
  variant?: "primary" | "secondary";
}

const RowCard: React.FC<RowCardProps> = ({
  title,
  image,
  description,
  variant,
  isActive,
}) => {
  return (
    <div
      className={clsx(
        "max-w-[540px] w-full h-[140px] flex flex-col justify-center px-2 rounded-2xl border border-grey-200 bg-white-200 hover:border-black-200",
        isActive && "border-black-200"
      )}
    >
      <div className="max-w-[508px] w-full h-[124px] bg-white flex px-6 items-center gap-5">
        <img src={image} alt="vacancy" className="h-12 w-12 object-cover" />

        <div className="flex flex-col gap-2">
          <h3 className="text-[18px] font-semibold">{title}</h3>

          <h3
            className={clsx(
              "text-grey-400",
              variant === "secondary" && "text-ocean"
            )}
          >
            {description}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default RowCard;
