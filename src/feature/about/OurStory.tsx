import Subject from "@src/components/subject/Subject";
import { Link } from "@tanstack/react-router";

const OurStory = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:justify-between lg:h-[372px] px-8 gap-20 py-20 lg:px-44 bg-grey-50">
      <img
        src="/about_us/chart.png"
        className="h-[312px] object-cover items-center lg:hidden"
        alt="chart"
      />
      <div className="flex flex-col w-full max-w-[570px]">
        <Subject title="OUR STORY" />
        <p className="text-[16px] lg:text-[18px] mt-5">
          Teqnological Asia Ltd,. is a software development enterprise
          established in 2017. We have delivered more than 20 applications and
          services to especially, Japanese market, and other nations on the
          global scale.
        </p>
        <p className="text-[16px] lg:text-[18px] mt-2">
          Currently, we are playing a central role as a software development
          center for{" "}
          <Link
            to="/"
            className="py-1 text-ocean hover:text-black hover:font-bold whitespace-nowrap"
          >
            Finatext Holding
          </Link>
        </p>
      </div>

      <img
        src="/about_us/chart.png"
        className="h-[312px] object-cover hidden lg:block"
        alt="chart"
      />
    </div>
  );
};

export default OurStory;
