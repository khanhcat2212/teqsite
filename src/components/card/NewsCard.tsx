import React from "react";

import type { Card } from "@src/interfaces/card";
import { useNavigate } from "@tanstack/react-router";

const NewsCard: React.FC<Card> = ({ id, title, image, description }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate({ to: `/news/${id}` })}
      className="max-w-100 max-h-93.5 p-1.5 w-full h-full rounded-md border border-grey-100 hover:border-black flex items-center justify-center hover:scale-[1.03] transition-transform duration-300 ease-in-out bg-grey-900 cursor-pointer"
    >
      <div className="max-w-97.5 max-h-90.5 w-full h-full rounded-md bg-white overflow-hidden">
        <img
          src={image}
          alt="news"
          className="w-full max-h-70.5 object-cover"
        />

        <div className="px-6 py-3 h-20 gap-0.5">
          <h3 className="text-[1.25rem] font-semibold">{title}</h3>
          <p className="text-[.875rem] text-grey-400">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
