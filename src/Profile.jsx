import { useState } from "react";
import "./index.css";

function Profile() {
  // const [count, setCount] = useState(0);
  return (
    <>
      <div className="profile-container">
        <div className="image-cropper">
          <img id="profile-picture" src="src\images\2pi_square.jpeg"></img>
        </div>
      </div>
    </>
  );
}

export default Profile;
