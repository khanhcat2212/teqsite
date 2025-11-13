import { useMemo, useState } from "react";

import NewsList from "@src/components/cardlist/NewsList";
import Input from "@src/components/input/Input";
import { news } from "@src/constants/news";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/news/")({
  component: RouteComponent,
});

function RouteComponent() {
  const [keyword, setKeyword] = useState("");

  const filteredNews = useMemo(() => {
    const search = keyword.trim().toLowerCase();
    if (!search) return news;

    return news.filter((item) => {
      const titleMatch = item.title
        ? item.title.toLowerCase().includes(search)
        : false;
      const descMatch = item.description
        ? item.description.toLowerCase().includes(search)
        : false;
      return titleMatch || descMatch;
    });
  }, [keyword]);

  return (
    <>
      <div className="w-full h-54 flex flex-col items-center gap-8">
        <p className="text-[1.5rem] md:text-[2.25rem] font-bold text-center mt-6">
          All News
        </p>
        <div className="w-[80%] max-w-141">
          <Input
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            variant="search"
            placeholder="Search"
          />
        </div>
      </div>

      <div className="w-full flex items-center justify-center pb-24">
        <NewsList cards={filteredNews} />
      </div>
    </>
  );
}
