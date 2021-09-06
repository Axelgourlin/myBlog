import { useContext } from "react";

import { Context } from "../../context/Context";

import SideBar from "../../components/SideBar/SideBar";

import "./Settings.css";

const Settings = () => {
  const { user } = useContext(Context);

  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsProfilePicture">
            <img src={user.profilePicture} alt="" />
            <label htmlFor="fileInput">
              <i className="settingsProfilePictureIcon far fa-user-circle"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Your name.." />
          <label>Email</label>
          <input type="text" placeholder="Your email.." />
          <label>Password</label>
          <input type="password" placeholder="Your password.." />
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <SideBar />
    </div>
  );
};

export default Settings;
