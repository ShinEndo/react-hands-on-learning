import React, {useState,Suspense, lazy} from "react";
import ErrorBoundary from "./ErrorBoundary";
import GridLoader from "react-spinners/GridLoader";

// const loadStatus = () => "success - ready";
const loadStatus = () => {
  console.log("laod status")
  throw new Promise(resolves => setTimeout(resolves,3000));
}

function Status() {
  const status = loadStatus();
  return <h1>status: {status}</h1>
}

// safe(loadStatus);

// function safe(fn) {
//   try{
//     fn();
//   } catch(error) {
//     if(error instanceof Promise) {
//       error.then(()=>safe(fn));
//     } else {
//       throw error;
//     }
    
//   }
// }

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
