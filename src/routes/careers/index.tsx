import JoinUs from "@src/feature/careers/JoinUs";
import OurBenefit from "@src/feature/careers/OurBenefit";
import OurCulture from "@src/feature/careers/OurCulture";
import Vacancies from "@src/feature/careers/Vacancies";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/careers/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <JoinUs />
      <OurCulture />
      <OurBenefit />
      <Vacancies />
    </>
  );
}
