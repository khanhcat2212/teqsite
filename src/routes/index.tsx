import Banner from "@src/feature/home/Banner";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <>
      <div className="w-screen">
        <Banner />
      </div>
    </>
  );
}
