import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./Header.css";

function Header() {
  // const [count, setCount] = useState(0);
  return (
    <>
      <div className="headerContainer">
        <ul>
          <li id="devfinder">devfinder</li>
          <li id="light-sun">
            <div className="ligtSunCOntainer">
              LIGHT
              <img
                id="whiteSun"
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
