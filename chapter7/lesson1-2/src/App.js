import logo from './logo.svg';
import './App.css';
import { Children, useCallback, useEffect, useMemo, useState } from 'react';

const useAnyKeyToRender = () => {
  const [,forceRender]  = useState();

  useEffect(()=>{
    window.addEventListener("keydown", forceRender);
  },[]);
}

function WordCount({children = ""}) {
  useAnyKeyToRender();

  const words = useMemo(() => {
    const words =  children.split(" ");
    return words;
  },[children]);

  useEffect(()=>{
    console.log("fresh render 1");
  },[words]);

  const fn = useCallback(() => {
    console.log("hello");
    console.log("world");
  },[]);

  useEffect(()=>{
    console.log("fresh render 2");
    fn();
  },[fn]);



  return (
    <>
      <p>{children}</p>
      <p>
        <strong>{words.length} - words</strong>
      </p>
    </>
  )

}

function App() {
  // useAnyKeyToRender();

  // useEffect(()=>{
  //   console.log("fresh render");
  // });
  // return <h1>Open the console</h1>;
  return <WordCount>You are not going to believe this but ...</WordCount>
}

export default App;
