import "./Post.css";

const Post = () => {
  return (
    <div className="post">
      <img
        className="postImg"
        src="http://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet.</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum aperiam
        exercitationem quam voluptate, cum accusamus culpa odio. Molestiae, modi
        debitis. Quo nihil eius impedit tempora aut alias, error ipsa provident.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum aperiam
        exercitationem quam voluptate, cum accusamus culpa odio. Molestiae, modi
        debitis. Quo nihil eius impedit tempora aut alias, error ipsa provident.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum aperiam
        exercitationem quam voluptate, cum accusamus culpa odio. Molestiae, modi
        debitis. Quo nihil eius impedit tempora aut alias, error ipsa provident.
      </p>
    </div>
  );
};

export default Post;
