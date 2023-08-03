import React, {useState,Suspense, lazy} from "react";
import ErrorBoundary from "./ErrorBoundary";
import GridLoader from "react-spinners/GridLoader";

// const loadStatus = () => "success - ready";
const loadStatus = () => {
  throw new Promise(resolves => null);
}

function Status() {
  const status = loadStatus();
  return <h1>status: {status}</h1>
}

function App() {
  return (
    <Suspense fallback={<GridLoader />}>
      <ErrorBoundary>
        <Status />
      </ErrorBoundary>
    </Suspense>
  )
}

export default App;
