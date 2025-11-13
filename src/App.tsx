import { createRouter, RouterProvider } from "@tanstack/react-router";

import { JobProvider } from "./contexts/JobContext";
import { NewsProvider } from "./contexts/NewsContext";
import { routeTree } from "./routeTree.gen";

import "./App.css";

const router = createRouter({ routeTree });

function App() {
  return (
    <JobProvider>
      <NewsProvider>
        <RouterProvider router={router} />
      </NewsProvider>
    </JobProvider>
  );
}

export default App;
