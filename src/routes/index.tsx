import Banner from "@src/feature/home/Banner";
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
      </div>
    </>
  );
}
