import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import "./index.css";
import { routeTree } from "./routeTree.gen";
import FastLoader from "./components/Loader/FastLoader";

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
   
    const timeOut = window.setTimeout(() => {
      setIsLoading(false);
    }, 5000);
    
    return () => window.clearTimeout(timeOut);
  }, []);

  return (
    <>
      {isLoading ? (
        <FastLoader />
      ) : (
        <RouterProvider router={router} />
      )}
    </>
  );
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);