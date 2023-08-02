import React, { memo, useState } from "react";

const Cat = ({name, meow = f => f}) => {
  console.log(`redering ${name}`);
  return <p onClick={()=>meow(name)}>{name}</p>;
}

const PureCat = memo(Cat,(prevProps,nextProps) => prevProps.name === nextProps.name);

function App() {
  const [cats, setCats] = useState(["aaa","bbb","ccc"]);
  return (
    <>
      {cats.map((name, i)=>{
        return <PureCat key={i} name={name} meow={name => console.log(`${name} has meowed`)}/>
       })}
       <button onClick={()=>setCats([...cats, prompt("Name a cat")])}>Add a cat</button>
    </>
  );
}

export default App;
