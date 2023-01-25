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
        <div className="bio-desc"></div>
        <div className="bio-numbers">
          {Object.keys(numbers).map((number) => (
            <div className="number">
              {number}
              <br />
              {numbers[number]}
            </div>
          ))}
        </div>
        <div className="more-info"></div>
      </div>
    </>
  );
}

export default Profile;
