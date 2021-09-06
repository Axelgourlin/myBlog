import { useEffect, useState } from "react";
import axios from "axios";

import aboutPic from "../../assets/aboutMe.jpg";

import "./SideBar.css";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [cats, setCat] = useState();

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCat(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src={aboutPic} alt="" />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, culpa
          iure. Voluptate hic ipsa repellendus numquam ipsum debitis et fuga
          dolorum.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats &&
            cats.map((cat) => (
              <Link to={`/?cat=${cat.name}`}>
                <li className="sidebarListItem">{cat.name}</li>
              </Link>
            ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
