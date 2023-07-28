import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [val, set] = useState("");
  const [phrase, setPharase] = useState("example phrase");

  const createPhrase = () => {
    setPharase(val);
    set("");
  }

  useEffect(()=>{
    console.log(`typing: ${val}`);
  },[val]);

  useEffect(()=>{
    console.log(`saving phrase: "${phrase}"`);
  },[phrase]);

  useEffect(()=>{
    console.log("either val or phrase has changed");
  },[val,phrase]);

  return (
    <>
      <label>Favorite phrase:</label>
      <input value={val} placeholder={phrase} onChange={e => set(e.target.value)}/>
      <button onClick={createPhrase}>send</button>
    </>
  )
}

export default App;
