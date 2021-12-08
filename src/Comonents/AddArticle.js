import React, { useState } from "react";
import axios from "axios";

const AddArticle = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [details, setDetails] = useState("");

  const handleChange = (e) => {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else if (e.target.name === "author") {
      setAuthor(e.target.value);
    } else if (e.target.name === "details") {
      setDetails(e.target.value);
    }
  };
  const saveData = async (e) => {
    e.preventDefault();
    const data = {
      title: title,
      author: author,
      details: details,
    };
    try {
      const res = await axios.post("http://localhost:3001/article", {
        title: title,
        author: author,
        details: details,
      });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form className="ui form" onSubmit={(e) => saveData(e)}>
        <div className="field">
          <label>Title</label>
          <input
            value={title}
            type="text"
            name="title"
            placeholder="Title...."
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="field">
          <label>Author</label>
          <input
            value={author}
            type="text"
            name="author"
            placeholder="Author...."
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="field">
          <label>Details</label>
          <input
            value={details}
            type="text"
            name="details"
            placeholder="Details..."
            onChange={(e) => handleChange(e)}
          />
        </div>

        <button className="ui button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddArticle;
