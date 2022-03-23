import "./write.css";

function Write() {
  return (
    <div className="write">
      <img
        src="https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
        className="writeImg"
      />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fa-solid fa-plus"></i>
          </label>
          <input type="file" id="fileInput" />
          <input
            type="text"
            className="writeInput"
            placeholder="Title"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            type="text"
            placeholder="Tell your Story..."
            className="writeInput writeText"
          ></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  );
}

export default Write;
