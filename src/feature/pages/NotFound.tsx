import React from "react";
import { useMediaQuery } from "react-responsive";

import Button from "@src/components/button/Button";
import { useNavigate } from "@tanstack/react-router";

const NotFound: React.FC = () => {
  const isLg = useMediaQuery({ minWidth: 1024 });
  const isMd = useMediaQuery({ minWidth: 768 });
  const navigate = useNavigate();
  return (
    <div className="w-full pt-16 pb-32 flex flex-col items-center justify-center">
      <p className="text-[5rem] md:text-[7.5rem] font-bold leading-tight">
        404
      </p>
      <p className="text-[18px] md:text-[28px] text-gray-600 mb-4">
        Oops! Page not found
      </p>
      <p className="text-[14px] md:text-[16px] text-gray-600">
        The page you were looking for could not be found.
      </p>

      <div className="flex flex-col w-fit justify-center mt-11">
        <Button
          onClick={() => navigate({ to: "/" })}
          type="submit"
          variant="primary"
          size={isLg ? "lg" : isMd ? "md" : "sm"}
        >
          RETURN TO HOMEPAGE
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
