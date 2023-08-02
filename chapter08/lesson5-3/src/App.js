import React, {useState} from "react";
import { Fetch } from "./Fetch";
import {UserDetail} from "./UserDetail"
import { UserRepositories } from "./UserRepositories";
import { RepositoryReadme } from "./RepositoryReadme";
import SearchForm from "./SearchForm";

function GitHubUser({login}){
  return <Fetch uri={`https://api.github.com/users/${login}`} renderSuccess={UserDetail}/>
}

function App() {
  const [login, setLogin] = useState("ShinEndo");
  const [repo, setRepo] = useState("blog");

  const handleSearch = login => {
    if(login) return setLogin(login);
    setLogin("");
    setRepo("");
  };

  if(!login) return (<SearchForm value={login} onSearch={handleSearch} />); 
  return (
    <>
      <SearchForm value={login} onSearch={setLogin} />
      <GitHubUser login={login} />
      <UserRepositories
        login={login}
        selectedRepo={repo}
        onSelect={setRepo}
      />
      <RepositoryReadme login={login} repo={repo} />
    </>
  )
}

export default App;
