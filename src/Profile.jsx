import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./Profile.css";

function Profile() {
  // const [count, setCount] = useState(0);
  return (
    <>
      <div className="profileContainer">
        <div className="image-cropper">
          <img id="profilePicture" src="src\images\2pi_square.jpeg"></img>
        </div>
      </div>
    </>
  );
}

export default Profile;
