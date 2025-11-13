import GalleryList from "@src/components/cardlist/GalleryList";
import { galleries } from "@src/constants/galleries";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/gallery")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <div className="w-full h-36 flex flex-col items-center gap-8">
        <p className="text-[1.5rem] md:text-[2.25rem] font-bold text-center mt-6">
          Gallery
        </p>
      </div>

      <div className="w-full flex items-center justify-center pb-24">
        <GalleryList cards={galleries} />
      </div>
    </>
  );
}
