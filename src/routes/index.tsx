import AboutUs from "@src/feature/home/AboutUs";
import Banner from "@src/feature/home/Banner";
import Gallery from "@src/feature/home/Gallery";
import Hiring from "@src/feature/home/Hiring";
import News from "@src/feature/home/News";
import OurPartners from "@src/feature/home/OurPartners";
import OurProducts from "@src/feature/home/OurProducts";
import Solutions from "@src/feature/home/Solutions";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <>
      <div className="w-screen">
        <Banner />
        <Solutions />
        <AboutUs />
        <OurProducts />
        <OurPartners />
        <Hiring />
        <News />
        <Gallery />
      </div>
    </>
  );
}
