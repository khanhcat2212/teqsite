import React from "react";

import type { Card } from "@src/interfaces/card";

const CapabilityCard: React.FC<Card> = ({ title, description }) => {
  return (
    <div className="max-w-[540px] md:h-[222px] h-full py-8 bg-grey-900 border-l-2 border-black flex flex-col gap-3 justify-center px-8">
      <h3 className="text-black text-[22px] font-semibold">{title}</h3>

      <p className="text-[18px]">{description}</p>
    </div>
  );
};

export default CapabilityCard;
