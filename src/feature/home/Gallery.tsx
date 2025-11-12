import React from "react";
import { useMediaQuery } from "react-responsive";

import Button from "@src/components/button/Button";
import { galleryPreviews } from "@src/constants/galleryPreviews";

const Gallery: React.FC = () => {
  const isLg = useMediaQuery({ minWidth: 1024 });
  const isMd = useMediaQuery({ minWidth: 768 });
  const previews = galleryPreviews.slice(0, isLg ? 8 : isMd ? 4 : 2);
  return (
    <div className="flex flex-col items-center lg:justify-center py-12 lg:py-16 px-4">
      <p className="text-[1.5rem] md:text-[2.25rem] font-bold lg:mb-4">
        Gallery
      </p>

      <div className="relative flex w-full items-center justify-center py-8">
        <img
          src="/filter.svg"
          className="absolute w-full h-132 object-cover"
          alt="feather"
        />
        <div className="flex flex-wrap justify-center gap-4 max-h-130 overflow-hidden">
          {previews.map((preview, index) => (
            <img
              key={index}
              src={preview.image}
              alt="preview"
              className="h-62.5 flex-none object-cover"
            />
          ))}
        </div>
      </div>

      <Button
        variant="primary"
        size={isLg ? "lg" : isMd ? "md" : "sm"}
        className="mb-4"
      >
        READ MORE
      </Button>
    </div>
  );
};

export default Gallery;
