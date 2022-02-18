import { useContext, useState } from "react";
import ProfileContext from "../Context/ProfileContext";

function Profile() {
  const [updatedUsername, setupdatedUsername] = useState("");
  const ProfileContextValue = useContext(ProfileContext);
  return (
    <div style={{ marginTop: "30px" }}>
      <input
        type="text"
        placeholder="enter username"
        value={updatedUsername}
        onChange={(e) => {
          setupdatedUsername(e.target.value);
        }}
      />
      <button
        onClick={() => {
          ProfileContextValue.setUsername(updatedUsername);
        }}
      >
        update username
      </button>
    </div>
  );
}
export default Profile;
