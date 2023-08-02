import React, { useState, useEffect } from "react";
import {GraphQLClient} from "graphql-request";
import SearchForm from "./SearchForm";

const query = `
  query findRepos($login: String!) { 
    user(login: $login) {
      id
      login
      name
      location
      avatar_url: avatarUrl
      repositories(first:100) {
        totalCount
        nodes {
          name
          url
        }
      }
    }
  }
`;

const API_KEY = process.env.REACT_APP_API_KEY;
const authorization = `Bearer ${API_KEY}`;

const client = new GraphQLClient(
  "https://api.github.com/graphql",
  {
    headers: {
      Authorization: authorization
    }
  }
);

function UserDetails(data) {
  return (
    <div className="githubUser">
      <img src={data.avatar_url} alt={data.login} style={{ width: 200 }} />
      <div>
        <h1>{data.login}</h1>
        {data.name && <p>{data.name}</p>}
        {data.location && <p>{data.location}</p>}
      </div>
    </div>
  );
}

function List({ data = [], renderItem, renderEmpty }) {
  return !data.length ? (
    renderEmpty
  ) : (
    <ul>
      {data.map((item, i) => (
        <li key={i}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}

function App() {

  const [login, setLogin] = useState("ShinEndo");
  const [userData, setUserData] = useState();

  useEffect(()=>{
    client
      .request(query, {login: "ShinEndo"})
      .then(({ user }) => user)
      .then(setUserData)
      .catch(console.error);
  },[client,query,login]);
  if (!userData) return <p>loading...</p>;
  console.log(userData);
  return (
    <>
      <SearchForm value={login} onSearch={setLogin} />
      <UserDetails {...userData} />
      <List
        data={userData.repositories.nodes}
        renderItem={repo => <span>{repo.name}</span>}
      />
    </>
  );
}

export default App;

// 'Token':'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'
