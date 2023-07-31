import React from "react";
import { Fetch } from "./Fetch";

function GitHubUser({login}){
  return <Fetch uri={`https://api.github.com/users/${login}`} renderSuccess={UserDetail}/>
}

function UserDetail({data}) {
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
