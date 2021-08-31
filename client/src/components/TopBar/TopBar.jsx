import { NavLink } from "react-router-dom";
import "./TopBar.css";

const TopBar = () => {
  const user = true;
  return (
    <div className="topBar">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <NavLink to="/">HOME</NavLink>
          </li>
          <li className="topListItem">
            <NavLink to="/">ABOUT</NavLink>
          </li>
          <li className="topListItem">
            <NavLink to="/">CONTACT</NavLink>
          </li>
          <li className="topListItem">
            <NavLink to="/write">WRITE</NavLink>
          </li>
          <li className="topListItem">{user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <img
            className="topImg"
            src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <NavLink to="/login">LOGIN</NavLink>
            </li>
            <li className="topListItem">
              <NavLink to="/register">REGISTER</NavLink>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
};

export default TopBar;
