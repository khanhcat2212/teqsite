/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import Button from "@src/components/button/Button";
import { useNewsContext } from "@src/contexts/NewsContext";
import { createFileRoute, useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute("/news/$id")({
  component: RouteComponent,
});

function RouteComponent() {
  const isLg = useMediaQuery({ minWidth: 1024 });
  const isMd = useMediaQuery({ minWidth: 768 });
  const navigate = useNavigate();

  const { id } = Route.useParams();
  const { newsDetail, fetchNewsById } = useNewsContext();

  useEffect(() => {
    fetchNewsById(id);
  }, [id]);

  if (!newsDetail) return null;

  return (
    <div className="h-full w-full">
      <div className="relative w-full h-76 md:h-76">
        <div className="w-full z-0 h-full flex items-center justify-between">
          <div className="w-1/3 h-full bg-[url('/feather_l.svg')] bg-cover bg-center bg-no-repeat" />
          <div className="w-1/3 h-full bg-[url('/feather_r.svg')] bg-cover bg-center bg-no-repeat" />
        </div>

        <div className="absolute w-full h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 py-6 px-4">
          <Button
            onClick={() => navigate({ to: "/news" })}
            variant="secondary"
            size={isLg ? "lg" : isMd ? "md" : "sm"}
          >
            <div className="flex items-center gap-2">
              <img src="/left_icon.svg" className="w-5 h-5" alt="back" />
              <p className="text-[14px] md:text-[16px]">
                Back to <b>News</b>
              </p>
            </div>
          </Button>

          <div className="flex flex-col items-center py-4 md:py-0 gap-6">
            <p className="text-[20px] md:text-[46px] font-bold text-center">
              {newsDetail.title}
            </p>

            <div className="flex gap-4 md:gap-10 mb-3">
              <div className="flex items-center gap-1 text-[14px] text-black-100">
                <img src="/news/icon_1.svg" className="h-6" alt="timeread" />
                <p> {newsDetail.readtime}</p>
              </div>

              <div className="flex items-center gap-2 text-[14px] text-black-100">
                <img src="/news/icon_2.svg" className="h-6" alt="posted_Date" />
                <p> {newsDetail.postedDate}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
