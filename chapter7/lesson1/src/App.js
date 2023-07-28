import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function CheckBox() {
  const [checked,setChecked] = useState(false);

  useEffect(()=>{
    alert(`checked: ${checked.toString()}`);
    localStorage.setItem("checkbox-value", checked);
  },[checked]);

  return (
    <>
      <input type="checkbox" value={checked} onChange={()=> setChecked(checked => !checked)}/>
      {checked ? "checked" : "not chekced"}
    </>
  )
}

function App() {
  return <CheckBox />
}

export default App;
