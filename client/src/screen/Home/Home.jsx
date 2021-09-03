import { useEffect, useState } from "react";
import axios from "axios";

import Header from "../../components/Header/Header";
import Posts from "../../components/Posts/Posts";
import SideBar from "../../components/SideBar/SideBar";

import "./Home.css";

const Home = () => {
  const [posts, setPosts] = useState();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts");
      console.log(res);
      setPosts(res.data);
    };
    fetchPosts();
  }, []);

  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <SideBar />
      </div>
    </>
  );
};

export default Home;
