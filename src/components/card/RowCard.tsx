import React from "react";
import clsx from "clsx";

import type { Card } from "@src/interfaces/card";
import { useNavigate } from "@tanstack/react-router";

interface RowCardProps extends Card {
  variant?: "primary" | "secondary";
}

const RowCard: React.FC<RowCardProps> = ({
  id,
  title,
  image,
  description,
  variant,
  isActive,
}) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate({ to: `/careers/${id}` })}
      className={clsx(
        "max-w-135 w-full h-35 flex flex-col justify-center items-center p-2 rounded-2xl border border-grey-200 bg-white-200 hover:border-black-200 cursor-pointer",
        isActive && "border-black-200"
      )}
    >
      <div className="w-full h-full bg-white flex px-6 items-center gap-5 rounded-2xl">
        <img src={image} alt="vacancy" className="h-12 w-12 object-cover" />

        <div className="flex flex-col gap-2">
          <h3 className="text-[1.125rem] font-semibold">{title}</h3>

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
