import { useState, useEffect } from "react";

function Search() {
  const [gitData, gitUserData] = useState([]);
  const [user, username] = useState("adarrrsh");
  const fetchData = (e) => {
    return fetch(`https://api.github.com/users/${user}`)
      .then((response) => response.json())
      .then((data) => {
        gitUserData(data);
        console.log(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="search">
      <img src={gitData.avatar_url} height="100" width="100" />
      <p>{gitData.name}</p>
      <input
        name="username"
        type="text"
        onChange={(e) => {
          username(e.target.value);
        }}
      />
      <br></br>
      <br></br>
      <button onClick={fetchData} className="search_button">
        Search Github
      </button>
    </div>
  );
}
export default Search;
