import logo from './logo.svg';
import './App.css';
import { useState, useReducer } from 'react';

function CheckBox () {
  // const [checked, setChecked] = useState(false);
  const [checked, toggle] = useReducer(checked => !checked, false);

  // function toggle() {
  //   setChecked(checked => !checked);
  // }

  return (
    <>
    <label>
      <input
        type="checkbox"
        value={checked}
        onChange={toggle}
      />
      { checked ? "checked" : "not checked"}
    </label>
    </>
  )
}

function App() {
  return <CheckBox />
}

export default App;
