import { useState } from "react";
import ProfileContext from "../Context/ProfileContext";
import Page from "./Page";
import Topnav from "./Topnav";

function MainContent() {
  const [username, setUsername] = useState("sangharsh");

  return (
    //should be enclosed in tag
    <ProfileContext.Provider
      value={{
        username: username,
        setUsername: setUsername
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <Topnav />
        <Page />
      </div>
    </ProfileContext.Provider>
  );
}
export default MainContent;
