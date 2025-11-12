import Map from "@src/feature/about/Map";
import OurCapabilities from "@src/feature/about/OurCapabilities";
import OurProfile from "@src/feature/about/OurProfile";
import OurStory from "@src/feature/about/OurStory";
import OurTeams from "@src/feature/about/OurTeams";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <div className="h-45 flex justify-center overflow-y-hidden">
        <div className="flex flex-col items-center justify-start mt-5 bg-[url('/about_us/about_bg.svg')] bg-cover bg-center bg-no-repeat h-55 lg:h-45 w-full px-8">
          <h1 className="text-[24px] md:text-[36px] font-bold">About Us</h1>

          <p className="text-[18px] md:text-[24px] text-black-100 mt-4 max-w-150 md:max-w-500 text-center">
            We assist in creating strategies, as well as in design and
            development.
          </p>
          <p className="text-[18px] md:text-[24px] text-black-100 max-w-150 md:max-w-500 text-center">
            We are values-driven and we take on work based on alignment with our
            values.
          </p>
        </div>
      </div>
      <OurStory />
      <OurCapabilities />
      <OurTeams />
      <OurProfile />
      <Map />
    </>
  );
}
