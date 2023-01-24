import { useState } from "react";
import "./index.css";

function Header() {
  // const [count, setCount] = useState(0);
  return (
    <>
      <div className="header-container">
        <ul>
          <li id="dev-finder">devfinder</li>
          <li id="light-sun">
            <div className="ligt-sun-cOntainer">
              LIGHT
              <img
                id="white-sun"
                src="https://vectorified.com/images/white-sun-icon-34.png"
              ></img>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
