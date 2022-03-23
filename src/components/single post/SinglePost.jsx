import "./singlepost.css";

function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet.
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-regular fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Hardik</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, porro labore. Libero voluptate quam, aspernatur omnis similique ea. Illo ipsa odio eligendi ratione cupiditate officiis nostrum alias distinctio autem atque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit odit aliquam odio asperiores modi dolorem aperiam assumenda ab perferendis iure. Officia, qui recusandae. Asperiores assumenda voluptate labore minus quae voluptates. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta nostrum reprehenderit velit, inventore quos quia ipsum laudantium blanditiis saepe, natus delectus vel asperiores iusto et libero error dignissimos voluptatum suscipit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus et suscipit nesciunt, praesentium sint numquam, cupiditate recusandae ullam, ea vel obcaecati necessitatibus veritatis autem rem animi corporis in. Sit, error. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta mollitia natus nisi nulla iste. Ad pariatur debitis magni cum temporibus itaque. Quia, distinctio? Eveniet magni vero aliquam atque maxime amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae labore officia, alias earum neque non aliquam necessitatibus id expedita dolor et rerum? Voluptate natus reiciendis officiis, omnis delectus aliquam harum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. In consequuntur repudiandae illum quia fugiat amet ad reprehenderit? Inventore ipsa ab repellendus nesciunt reiciendis iste repellat officiis porro, molestias dicta numquam?</p>
      </div>
    </div>
  );
}

export default SinglePost;
