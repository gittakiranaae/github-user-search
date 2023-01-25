import { useState } from "react";
import "./index.css";

function Profile() {
  // const [count, setCount] = useState(0);
  const numbers = { Repos: 8, Followers: 3938, Following: 9 };
  return (
    <>
      <div className="profile-container">
        <div className="bio-header">
          <div className="column">
            <div className="image-cropper">
              <img id="profile-picture" src="src\images\2pi_square.jpeg"></img>
            </div>
          </div>
          <div className="column">
            <p className="name">Gitta</p>
            <p className="username">@gittagittu</p>
            <p className="joined-since">Joined 25 Jan 2023</p>
          </div>
          <div></div>
        </div>
        <div className="bio-desc">
          Lorem ipsum dolor sit amet.
          <br /> consectetur adipisicing elit. Placeat nesciunt deserunt
          repellendus mollitia.
        </div>
        <div className="bio-numbers">
          {Object.keys(numbers).map((number) => (
            <div className="number">
              {number}
              <br />
              <p className="number">{numbers[number]} </p>
            </div>
          ))}
        </div>
        <div className="more-info">
          <div>
            <img
              className="icon"
              src="https://vectorified.com/images/white-sun-icon-34.png"
            ></img>
            San Fransisco
          </div>
          <div>
            <img
              className="icon"
              src="https://vectorified.com/images/white-sun-icon-34.png"
            ></img>
            <a href="https://heretoshare.id/" target="_blank">
              https://heretoshare.id/
            </a>
          </div>
          <div>
            <img
              className="icon"
              src="https://vectorified.com/images/white-sun-icon-34.png"
            ></img>
            @gittagittu
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
