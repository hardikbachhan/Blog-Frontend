import Sidebar from "../../components/sidebar/Sidebar";
import SinglePost from "../../components/single post/SinglePost";
import "./displaypost.css";

function DisplayPost() {
  return (
    <div className="displayPost">
      {/* post */}
      <SinglePost />
      <Sidebar />
    </div>
  );
}

export default DisplayPost;
