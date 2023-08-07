import React from 'react';
import ReactDOM from 'react-dom/client';

type AppProps = {
  item: string
}

function App(props:AppProps) {
  return (
    <div>
      <h1>{props.item}</h1>
    </div>
  )
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <App item="jacket"/>
);

