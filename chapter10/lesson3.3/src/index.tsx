import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

type AppProps = {
  item: string
}

function App(props:AppProps) {
  const [fabricColor, setFablicColor] = useState("purple");
  return (
    <div>
      <h1>{fabricColor} - {props.item}</h1>
      <button onClick={()=>setFablicColor("blue")}>Make the Jacket Blue</button>
    </div>
  )
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <App item="jacket"/>
    // <App item={1}/>
); 