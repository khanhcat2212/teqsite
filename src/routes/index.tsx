import Input from "@src/components/input/Input";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="flex flex-col gap-4 w-200">
      <Input variant="primary" placeholder="Nguyen Van A" />

      <Input
        variant="secondary"
        label="linkedin.com/in/"
        placeholder="handle"
      />

      <Input variant="search" placeholder="Search" />

      <Input variant="error" placeholder="youremail@gmail.com" />
    </div>
  );
}
