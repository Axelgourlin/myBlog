import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";

import "./SinglePost.css";

const SinglePost = () => {
  const [singlePost, setSinglePost] = useState();

  const location = useLocation();
  console.log("location:", location);
  const path = location.pathname.split("/")[2];
  console.log("path:", path);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      console.log(res);
      setSinglePost(res.data);
    };
    getPost();
  }, [path]);

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {singlePost.photo && (
          <img
            className="singlePostImg"
            src={singlePost.photo}
            alt="img of post"
          />
        )}
      </div>
      <h1 className="singlePostTitle">
        {singlePost && singlePost.title}
        <div className="singlePostEdit">
          <i className="singlePostIcon far fa-edit"></i>
          <i className="singlePostIcon far fa-trash-alt"></i>
        </div>
      </h1>
      <div className="singlePostInfo">
        <span className="singlePostAuthor">
          Author: <b>{singlePost && singlePost.username}</b>
        </span>
        <span className="singlePostDate">
          {singlePost && new Date(singlePost.createdAt).toDateString()}
        </span>
      </div>
      <p className="singlePostDesc">{singlePost && singlePost.desc}</p>
    </div>
  );
};

export default SinglePost;
