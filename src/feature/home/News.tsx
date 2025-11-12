import React from "react";
import { useMediaQuery } from "react-responsive";

import Button from "@src/components/button/Button";
import NewsList from "@src/components/cardlist/NewsList";
import { news } from "@src/constants/news";

const News: React.FC = () => {
  const isLg = useMediaQuery({ minWidth: 1024 });
  const isMd = useMediaQuery({ minWidth: 768 });
  const previews = isLg
    ? news.slice(0, 3)
    : isMd
      ? news.slice(0, 2)
      : news.slice(0, 3);

  return (
    <div className="flex flex-col items-center justify-center gap-6 md:gap-8 px-4 pt-16 pb-12">
      <h1 className="text-[1.5rem] md:text-[2.25rem] font-bold leading-0">
        Latest News
      </h1>

      <div className="mt-8">
        <NewsList cards={previews} />
      </div>

      <Button variant="primary" size={isLg ? "lg" : isMd ? "md" : "sm"}>
        READ MORE
      </Button>
    </div>
  );
};

export default News;
