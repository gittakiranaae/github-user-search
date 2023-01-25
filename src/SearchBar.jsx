import { useState } from "react";
import "./index.css";

function SearchBar() {
  const [searchName, setSearchName] = useState("");
  return (
    <>
      <div className="search-bar-container">
        <img id="lupe" src="src\images\lupe.png"></img>
        <input
          className="search-bar"
          type="text"
          placeholder="Search GitHub username..."
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
        ></input>
        <a href={`https://github.com/search?q=${searchName}&type=users`}>
          <button className="search-button">Search</button>
        </a>
      </div>
    </>
  );
}

export default SearchBar;
