import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./SearchBar.css";

function SearchBar() {
  const [searchName, setSearchName] = useState("");
  return (
    <>
      <div className="searchBarContainer">
        <img id="lupe" src="src\images\lupe.png"></img>
        <input
          className="searchBar"
          type="text"
          placeholder="Search GitHub username..."
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
        ></input>
        <button className="searchButton">Search</button>
      </div>
    </>
  );
}

export default SearchBar;
