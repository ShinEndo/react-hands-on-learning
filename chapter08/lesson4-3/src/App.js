import React, { useEffect, useState } from "react";
import { useFetch } from "./useFetch";

function GitHubUser({login}){
  const {loading, data, error} = useFetch(`https://api.github.com/users/${login}`);
  
  if(data) {
    return <pre>{JSON.stringify(data,null,2)}</pre>;
  }

  if(loading) {
    return <h1>Loading...</h1>
  }

  return (
    <div className="githubUser">
      <img src={data.avatar_url} alt={data.name} stye={{width:200}} />
      <div>
        <h1>{data.login}</h1>
        {data.name && <p>{data.name}</p>}
        {data.location && <p>{data.location}</p>}
      </div>
    </div>
  );

}

function App() {
  return <GitHubUser login="ShinEndo" />
}

export default App;
