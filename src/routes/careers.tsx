import JoinUs from "@src/feature/careers/JoinUs";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/careers")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <JoinUs />
    </>
  );
}
