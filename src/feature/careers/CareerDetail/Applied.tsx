import { useMediaQuery } from "react-responsive";

import Button from "@src/components/button/Button";
import { useNavigate } from "@tanstack/react-router";

const Applied = () => {
  const isLg = useMediaQuery({ minWidth: 1024 });
  const isMd = useMediaQuery({ minWidth: 768 });
  const navigate = useNavigate();
  return (
    <div className="w-full h-[980px] flex flex-col items-center justify-center bg-white">
      <div className="flex flex-col items-center justify-between gap-22">
        <div className="flex flex-col items-center">
          <img
            src="/careers/applied.svg"
            className="w-[80%] max-w-[572px] object-cover"
            alt="applied"
          />
          <p className="text-[1.5rem] md:text-[2rem] font-bold  mt-10 mb-4 text-center">
            Application Submitted Successfully!
          </p>

          <p className="text-[.875rem] md:text-[1rem] text-grey-700 max-w-[438px] text-center">
            Thank you for applying. We will review your application and inform
            you about the next steps, please sit tight.
          </p>
        </div>

        <div className="flex flex-col w-fit justify-center gap-3">
          <Button
            onClick={() => navigate({ to: "/careers" })}
            type="submit"
            variant="primary"
            size={isLg ? "lg" : isMd ? "md" : "sm"}
          >
            SEARCH OTHER JOBS
          </Button>

          <Button
            onClick={() => navigate({ to: "/" })}
            type="submit"
            variant="secondary"
            size={isLg ? "lg" : isMd ? "md" : "sm"}
          >
            GO TO HOMEPAGE
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Applied;
