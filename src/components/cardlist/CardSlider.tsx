import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import type { Card } from "@src/interfaces/card";

import Button from "../button/Button";
import SolutionCard from "../card/SolutionCard";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const CardSlider: React.FC<{ cards: Card[] }> = ({ cards }) => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="relative max-w-95 md:max-w-195 lg:max-w-300 flex justify-center items-center">
      <Button
        variant="primary"
        size="icon"
        onClick={() => swiperRef.current?.slidePrev()}
        className="hidden md:flex lg:hidden w-10 absolute left-0 top-1/2 z-10 -translate-y-1/2 -translate-x-1/2"
      >
        <ChevronLeft size={24} className="text-white" />
      </Button>

      <Button
        variant="primary"
        size="icon"
        onClick={() => swiperRef.current?.slideNext()}
        className="hidden md:flex lg:hidden w-10 absolute right-0 top-1/2 z-10 -translate-y-1/2 translate-x-1/2"
      >
        <ChevronRight size={24} className="text-white" />
      </Button>

      {/* Swiper */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={10}
        pagination={{
          clickable: true,
          renderBullet: (_, className) => {
            return `<span class="${className} md:hidden" style="
                    background-color: #222; 
                    width: .75rem; 
                    height: .75rem; 
                    margin: 0 .25rem; 
                    border-radius: 624.9375rem;">
                  </span>`;
          },
        }}
        className="pb-20!"
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <SolutionCard {...card} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardSlider;
