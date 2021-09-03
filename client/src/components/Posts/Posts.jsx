import Post from "../Post/Post";
import "./Posts.css";

const Posts = ({ posts }) => {
  return (
    <div className="posts">
      {posts && posts.map((post) => <Post {...post} />)}
    </div>
  );
};

export default Posts;
