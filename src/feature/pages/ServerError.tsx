import React from "react";
import { useMediaQuery } from "react-responsive";

import Button from "@src/components/button/Button";
import { useNavigate } from "@tanstack/react-router";

const ServerError: React.FC = () => {
  const isLg = useMediaQuery({ minWidth: 1024 });
  const isMd = useMediaQuery({ minWidth: 768 });
  const navigate = useNavigate();
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <img src="/500.svg" className="w-[344px]" alt="500_bg" />

      <p className="text-[5rem] md:text-[7.5rem] font-bold leading-tight mt-16">
        500
      </p>
      <p className="text-[18px] md:text-[28px] text-gray-600 mb-4">
        Internal Server Error
      </p>
      <p className="text-[14px] md:text-[16px] text-gray-600">
        An internal server error has occured. Please try again later.
      </p>

      <div className="flex flex-col w-fit justify-center mt-11">
        <Button
          onClick={() => navigate({ to: "/" })}
          type="submit"
          variant="primary"
          size={isLg ? "lg" : isMd ? "md" : "sm"}
        >
          GO BACK
        </Button>
      </div>
    </div>
  );
};

export default ServerError;
