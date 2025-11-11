import React from "react";

import type { Card } from "@src/interfaces/card";

const DescriptionCard: React.FC<Card> = ({ image, description }) => {
  return (
    <div className="w-full max-w-lg flex items-center gap-4">
      <img src={image} alt="description" className="w-12 h-12 object-cover" />
      <p className="text-[.875rem] text-black-100">{description}</p>
    </div>
  );
};

export default DescriptionCard;
