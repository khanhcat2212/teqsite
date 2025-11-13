import { createRouter, RouterProvider } from "@tanstack/react-router";

import { JobProvider } from "./contexts/JobContext";
import { routeTree } from "./routeTree.gen";

import "./App.css";

const router = createRouter({ routeTree });

function App() {
  return (
    <JobProvider>
      <RouterProvider router={router} />
    </JobProvider>
  );
}

export default App;
