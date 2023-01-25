import { useState } from "react";
import "./index.css";

function Profile() {
  // const [count, setCount] = useState(0);
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
        </div>
      </div>
    </>
  );
}

export default Profile;
