import { createRouter, RouterProvider } from "@tanstack/react-router";

import { JobProvider } from "./contexts/JobContext";
import { NavProvider } from "./contexts/NavContext";
import { NewsProvider } from "./contexts/NewsContext";
import { routeTree } from "./routeTree.gen";

import "./App.css";

const router = createRouter({ routeTree });

function App() {
  return (
    <NavProvider>
      <JobProvider>
        <NewsProvider>
          <RouterProvider router={router} />
        </NewsProvider>
      </JobProvider>
    </NavProvider>
  );
}

export default App;
