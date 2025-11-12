import React from "react";

import type { Card } from "@src/interfaces/card";

const CapabilityCard: React.FC<Card> = ({ title, description }) => {
  return (
    <div className="max-w-135 md:h-55.5 h-full py-8 bg-grey-900 border-l-2 border-black flex flex-col gap-3 justify-center px-8">
      <h3 className="text-black text-[1.375rem] font-semibold">{title}</h3>

      <p className="text-[1.125rem]">{description}</p>
    </div>
  );
};

export default CapabilityCard;
