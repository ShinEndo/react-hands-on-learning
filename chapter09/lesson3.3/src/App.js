import React, {useState,Suspense, lazy} from "react";
import ErrorBoundary from "./ErrorBoundary";
import GridLoader from "react-spinners/GridLoader";

// const loadStatus = () => "success - ready";
// const loadStatus = (function(){
//   let error , response;
//   const promise = new Promise(resolves => setTimeout(resolves,3000)).then(()=>response = "success").then(e => (error = e));
//   return function() {
//     if(error) throw error;
//     if(response) return response;
//     throw pending;
//   }
// })();

// function Status() {
//   const status = loadStatus();
//   return <h1>status: {status}</h1>
// }

function createResource(pending) {
  let error, response;
  pending.then(r => (response = r)).catch(e => (error = e));
  return {
    read() {
      if(error) throw error;
      if(response) return response;
      throw pending;
    }
  }
}

const threeSecondToGnar = new Promise(resolves => setTimeout(()=> resolves({gnar: "gnarly!"}),3000));
console.log(threeSecondToGnar);
const resource = createResource(threeSecondToGnar);

function Gnar() {
  const result = resource.read();
  console.log(result);
  return <h1>Gnar: {result.gnar}</h1>

}

function App() {
  return (
    <Suspense fallback={<GridLoader />}>
      <ErrorBoundary>
        <Gnar />
      </ErrorBoundary>
    </Suspense>
  )
}

export default App;
