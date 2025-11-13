import { useMediaQuery } from "react-responsive";

import Button from "@src/components/button/Button";
import type { Job } from "@src/interfaces/jd";
import { useNavigate } from "@tanstack/react-router";

const Overview: React.FC<Job> = ({
  title,
  category,
  workplace,
  type,
  postedDate,
}) => {
  const isLg = useMediaQuery({ minWidth: 1024 });
  const isMd = useMediaQuery({ minWidth: 768 });
  const navigate = useNavigate();
  return (
    <div className="relative w-full h-76 md:h-76">
      <div className="w-full z-0 h-full flex items-center justify-between">
        <div className="w-1/3 h-full bg-[url('/feather_l.svg')] bg-cover bg-center bg-no-repeat" />
        <div className="w-1/3 h-full bg-[url('/feather_r.svg')] bg-cover bg-center bg-no-repeat" />
      </div>

      <div className="absolute w-full h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 py-6 px-4">
        <Button
          onClick={() => navigate({ to: "/careers" })}
          variant="secondary"
          size={isLg ? "lg" : isMd ? "md" : "sm"}
        >
          <div className="flex items-center gap-2">
            <img src="/left_icon.svg" className="w-5 h-5" alt="back" />
            <p className="text-[14px] md:text-[16px]">
              Back to <b>Careers</b>
            </p>
          </div>
        </Button>

        <div className="flex flex-col items-center py-4 md:py-0 gap-6">
          <p className="text-[20px] md:text-[46px] font-bold text-center">
            {title}
          </p>

          <div className="flex gap-4 md:gap-10 mb-3">
            <div className="flex flex-col md:flex-row gap-4 md:gap-10">
              <div className="flex items-center gap-1 text-[14px] text-black-100">
                <img
                  src="/careers/category.svg"
                  className="h-6"
                  alt="category"
                />
                <p> {category}</p>
              </div>

              <div className="flex items-center gap-2 text-[14px] text-black-100">
                <img src="/careers/place.svg" className="h-6" alt="category" />
                <p> {workplace}</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 md:gap-10">
              <div className="flex items-center gap-2 text-[14px] text-black-100">
                <img src="/careers/type.svg" className="h-6" alt="category" />
                <p> {type}</p>
              </div>

              <div className="flex items-center gap-2 text-[14px] text-black-100">
                <img src="/careers/date.svg" className="h-6" alt="category" />
                <p> {postedDate}</p>
              </div>
            </div>
          </div>

          <Button variant="primary" size={isLg ? "lg" : isMd ? "md" : "sm"}>
            JOIN US
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Overview;
