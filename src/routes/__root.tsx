import NotFound from "@src/feature/pages/NotFound";
import RootLayout from "@src/layouts/RootLayout";
import { createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: RootLayout,

  notFoundComponent: NotFound,
});
