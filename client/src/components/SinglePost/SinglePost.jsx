import "./SinglePost.css";

const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
      </div>
      <h1 className="singlePostTitle">
        Lorem ipsum dolor sit amet.
        <div className="singlePostEdit">
          <i className="singlePostIcon far fa-edit"></i>
          <i className="singlePostIcon far fa-trash-alt"></i>
        </div>
      </h1>
      <div className="singlePostInfo">
        <span className="singlePostAuthor">
          Author: <b>Axel</b>
        </span>
        <span className="singlePostDate">1 hour ago</span>
      </div>
      <p className="singlePostDesc">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur
        soluta, sint impedit voluptatibus dolore voluptas cum autem aliquid
        libero iure vero, ex placeat, minus consequatur deleniti obcaecati
        temporibus nisi iusto? Nostrum recusandae ad quidem accusamus aperiam
        quod repudiandae, alias quasi enim, tempore autem eveniet labore sed,
        sapiente iste nobis fuga incidunt rerum. Accusamus blanditiis laudantium
        repellat earum aspernatur assumenda aperiam. Aut necessitatibus, eos
        labore sequi fuga repudiandae, voluptatibus facilis ab, voluptates enim
        aliquid tempore? Aperiam, consectetur. Error labore quam eos ex
        similique, molestiae quia dolor quis dignissimos consequatur!
        Distinctio, officia?Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Distinctio facere ab, vel voluptatem excepturi corporis iste
        nostrum magnam earum nulla aperiam fugit nihil eveniet similique error
        repudiandae ratione perferendis deleniti.
      </p>
    </div>
  );
};

export default SinglePost;
