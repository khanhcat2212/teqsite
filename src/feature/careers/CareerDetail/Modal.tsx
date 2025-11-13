import { useMediaQuery } from "react-responsive";

import Button from "@src/components/button/Button";
import { useNavigate } from "@tanstack/react-router";

const Modal = () => {
  const isLg = useMediaQuery({ minWidth: 1024 });
  const isMd = useMediaQuery({ minWidth: 768 });
  const navigate = useNavigate();
  return (
    <div className="w-[80%] max-w-[518px] h-[305px] bg-white flex flex-col items-center justify-center gap-4">
      <img src="/careers/success.svg" className="w-18 h-18" alt="success" />
      <p className="text-[1.125rem] md:text-[1.5rem] font-bold text-center">
        Application Submitted Successfully!
      </p>
      <p className="text-[.75rem] md:text-[.875rem] text-grey-700 max-w-[438px] text-center">
        Your submission has been successfully sent.
      </p>
      <div className="flex flex-col w-fit justify-center mt-2">
        <Button
          onClick={() => navigate({ to: "/careers" })}
          type="submit"
          variant="primary"
          size={isLg ? "lg" : isMd ? "md" : "sm"}
        >
          CLOSE
        </Button>
      </div>
    </div>
  );
};

export default Modal;
