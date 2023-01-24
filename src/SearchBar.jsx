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
        <button className="search-button">Search</button>
      </div>
    </>
  );
}

export default SearchBar;
