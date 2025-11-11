import Header from "@src/components/layout/Header";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <>
      <div className="flex justify-center w-screen">
        <Header />
      </div>
    </>
  );
}
