import { useContext } from "react";
import ProfileContext from "../Context/ProfileContext";

function Topnav() {
  const ProfileContextValue = useContext(ProfileContext);
  return (
    <div style={{ display: "flex", justifyContent: "flex-end" }}>
      {ProfileContextValue.username}
    </div>
  );
}
export default Topnav;
