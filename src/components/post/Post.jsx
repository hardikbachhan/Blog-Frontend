import "./post.css";

function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.pexels.com/photos/3825540/pexels-photo-3825540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem Ipsum dolor sit amet</span>
        <hr />
        <span className="postDate">1 hour ago</span>
        <p className="postDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          voluptas beatae fugiat laboriosam ab, sint ea voluptates quas
          voluptatum, magni, fuga alias adipisci provident tenetur aspernatur
          animi commodi? Obcaecati, quia.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          voluptas beatae fugiat laboriosam ab, sint ea voluptates quas
          voluptatum, magni, fuga alias adipisci provident tenetur aspernatur
          animi commodi? Obcaecati, quia.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          voluptas beatae fugiat laboriosam ab, sint ea voluptates quas
          voluptatum, magni, fuga alias adipisci provident tenetur aspernatur
          animi commodi? Obcaecati, quia.
        </p>
      </div>
    </div>
  );
}

export default Post;
