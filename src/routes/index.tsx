// import CapabilityCard from "@src/components/card/CapabilityCard";
// import GalleryCard from "@src/components/card/GalleryCard";
// import NewsCard from "@src/components/card/NewsCard";
// import ProductCard from "@src/components/card/ProductCard";
// import RowCard from "@src/components/card/RowCard";
// import SolutionCard from "@src/components/card/SolutionCard";
// import TeamCard from "@src/components/card/TeamCard";
import AboutList from "@src/components/cardlist/AboutList";
import CardSlider from "@src/components/cardlist/CardSlider";
import NewsList from "@src/components/cardlist/NewsList";
import ProductList from "@src/components/cardlist/ProductList";
import { benefits } from "@src/constants/benefits";
import { capabilities } from "@src/constants/capabilities";
import { cards } from "@src/constants/cards";
import { news } from "@src/constants/news";
import { products } from "@src/constants/products";
import { teams } from "@src/constants/teams";
import { vacancies } from "@src/constants/vacancies";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <>
      <div className="flex  flex-col items-center justify-center w-screen">
        <CardSlider cards={cards} />

        <div className="mt-2 w-full">
          <ProductList cards={products} />
        </div>

        <div className="mt-2 w-full">
          <AboutList
            variant="capability"
            cards={capabilities}
            subject="OUR CAPABILITIES"
          />
        </div>

        <div className="mt-2 w-full">
          <AboutList variant="team" cards={teams} subject="OUR CAPABILITIES" />
        </div>

        <div className="mt-2 w-full">
          <AboutList variant="row" cards={vacancies} />
        </div>

        <div className="mt-2 w-full">
          <AboutList variant="jd" cards={benefits} />
        </div>

        <div className="mt-2 w-full">
          <NewsList variant="preview" cards={news} />
        </div>
      </div>
      {/* <div className="flex gap-4">
        <CapabilityCard
          title="Design infrastructure"
          description="We can operate infrastructure automation on any cloud services with Terraform. By composing infrastructure as code in a Terraform file using HCL, resources can be provided from any infrastructure provider."
        />

        <TeamCard
          title="Project Team"
          description="Guarantee all projects would be success"
          image="/teams/team_1.svg"
        />
      </div>
      <div className="flex gap-4 mt-4">
        <div className="flex flex-col gap-4 w-[390px]">
          <GalleryCard
            image="/galleries/gal_1.svg"
            title="Japan Class"
            description="~ 9 Photos ~"
          />
        </div>

        

        <div className="flex flex-col gap-4 w-[390px]">
          <NewsCard
            image="/news/news_1.svg"
            title="Happy international women’s day!"
            description="15/03/2023"
          />
        </div>

        <div className="flex flex-col gap-4 w-[390px]">
          <SolutionCard
            image="/solution/solution_1.svg"
            title="Backend"
            description="Design database, develop API and other backend Services"
          />
        </div>
      </div>
      <div className="flex gap-4 mt-4">
        <ProductCard image="/products/product_6.svg" title="EazyMock" />

        <RowCard
          variant="primary"
          title="Back-end Developer (Golang)"
          description="Up to $1500"
          image="/vacancies/vac_1.svg"
        />

        <RowCard
          variant="secondary"
          title="Back-end Developer (Golang)"
          description="Up to $1500"
          image="/vacancies/vac_1.svg"
        />
      </div> */}
    </>
  );
}
