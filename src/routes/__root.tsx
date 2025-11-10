import { createRootRoute, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: RootLayout,
});

function RootLayout() {
  return (
    <div>
      <h1>Root Layout</h1>
      <Outlet />
      <footer>Đang dùng TanStack Router</footer>
    </div>
  );
}
