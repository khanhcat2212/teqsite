import React from "react";
import { useMediaQuery } from "react-responsive";

import Button from "@src/components/button/Button";
import { useNavigate } from "@tanstack/react-router";

const Banner: React.FC = () => {
  const isMd = useMediaQuery({ minWidth: 768 });
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex flex-col w-full">
        <div className="h-fit flex flex-col items-center">
          <div className="relative h-70 lg:h-42 flex items-center lg:items-end">
            <h1 className="hidden lg:block text-[2.5rem] font-bold mb-4.5">
              Elevate Your
              <span className="inline-block py-0 leading-none bg-black text-white mx-3">
                Business
              </span>
              With Our Premium Solutions
            </h1>

            <div className="flex flex-col items-center md:justify-end lg:hidden gap-4">
              <div className="flex flex-col items-center gap-0 text-[1.5rem] md:text-[2.5rem] font-bold">
                <p>
                  Elevate Your
                  <span className="inline-block py-0 leading-none bg-black text-white mx-1 md:mx-3">
                    Business
                  </span>
                  With
                </p>
                <p>Our Premium Solutions</p>
                <p>For Web - Mobile - Backend</p>
              </div>

              <Button
                variant="primary"
                size={isMd ? "md" : "sm"}
                className="lg:hidden"
              >
                ABOUT US
              </Button>
            </div>
          </div>
          <div className="flex flex-col justify-start items-center bg-[url('/background.svg')] bg-cover bg-center bg-no-repeat h-[286px] md:h-[480px] w-full">
            <h1 className="hidden lg:block text-[40px] font-bold leading-none m-0">
              For Web - Mobile - Backend
            </h1>

            <Button
              variant="primary"
              size="lg"
              className="mt-11 hidden lg:block"
              onClick={() => navigate({ to: "/about" })}
            >
              ABOUT US
            </Button>
          </div>
        </div>
      </div>

      {/* <div className="flex flex-col lg:hidden items-center">
        <div className="h-160 flex flex-col items-center">
          <div className="h-42 flex items-end">
            <div className="flex flex-col gap-8 text-[24px] ">
              
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Banner;
