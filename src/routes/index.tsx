import { Helmet } from "react-helmet";

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
      <Helmet>
        <title>Teqnological</title>
        <meta
          name="description"
          content="We assist in creating strategies, as well as in design and development. We are values-driven and we take on work based on alignment with our values."
        />
        <meta name="keywords" content="technology, outsource, fintech" />
        <meta property="og:title" content="Teqnological" />
        <meta
          property="og:description"
          content="Elevate Your Business With Our Premium Solutions For Web - Mobile - Backend"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <main className="w-screen">
        <section id="banner">
          <Banner />
        </section>
        <section id="solutions">
          <Solutions />
        </section>
        <section id="about-us">
          <AboutUs />
        </section>
        <section id="products">
          <OurProducts />
        </section>
        <section id="partners">
          <OurPartners />
        </section>
        <section id="hiring">
          <Hiring />
        </section>
        <section id="news">
          <News />
        </section>
        <section id="gallery">
          <Gallery />
        </section>
      </main>
    </>
  );
}
