import Sidebar from "../../components/sidebar/Sidebar";
import "./settings.css";

function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://images.pexels.com/photos/220974/pexels-photo-220974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon fa-regular fa-circle-user"></i>
            </label>
            <input type="file" id="fileInput" />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Hardik" required/>
          <label>Email</label>
          <input type="email" placeholder="hardik@gmail.com" required/>
          <label>Password</label>
          <input type="password" required/>
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}

export default Settings;
