import Footer from "@src/components/layout/Footer";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <>
      <div className="flex justify-center w-screen">
        <Footer />
      </div>
    </>
  );
}
