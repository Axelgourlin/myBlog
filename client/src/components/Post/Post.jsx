import { Link } from "react-router-dom";

import "./Post.css";

const Post = ({
  _id,
  username,
  title,
  photo,
  createdAt,
  updatedAt,
  desc,
  categories,
}) => {
  const PF = "http://localhost:4001/images/";
  return (
    <div className="post">
      {photo && (
        <img className="postImg" src={PF + photo} alt="img of the Post" />
      )}

      <div className="postInfo">
        <div className="postCats">
          {categories.map((category) => (
            <span className="postCat">{category.name}</span>
          ))}
        </div>
        <Link to={`/post/${_id}`}>
          <span className="postTitle">{title}</span>
        </Link>
        <hr />
        <span className="postDate">{new Date(createdAt).toDateString()}</span>
      </div>
      <p className="postDesc">{desc}</p>
    </div>
  );
};

export default Post;
