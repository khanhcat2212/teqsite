import CapabilityCard from "@src/components/card/CapabilityCard";
import GalleryCard from "@src/components/card/GalleryCard";
import NewsCard from "@src/components/card/NewsCard";
import ProductCard from "@src/components/card/ProductCard";
import RowCard from "@src/components/card/RowCard";
import SolutionCard from "@src/components/card/SolutionCard";
import TeamCard from "@src/components/card/TeamCard";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <>
      <div className="flex gap-4">
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
      </div>
    </>
  );
}
