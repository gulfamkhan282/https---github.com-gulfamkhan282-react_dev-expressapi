import React, { useState, useEffect } from "react";
import axios from "axios";
import AddArticle from "./AddArticle";
const App = () => {
  const [article, setArticle] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get("http://localhost:3001/article");
        setArticle(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [article]);
  const handleDelete = async (id) => {
    try {
      const deletedArticle = await axios.delete(
        "http://localhost:3001/article/" + id
      );
      console.log(deletedArticle);
      if (deletedArticle) {
        alert(`Deleted ${deletedArticle.data.title} Sucessfully`);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <table className="ui celled table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Details</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {article.length === 0 ? (
            <tr>
              <td
                colSpan="3"
                style={{ textAlign: "center", color: "red", fontSize: "large" }}
              >
                No Articles found
              </td>
            </tr>
          ) : (
            article.map((row) => {
              return (
                <tr>
                  <td>{row.title}</td>
                  <td>{row.author}</td>
                  <td>{row.details}</td>
                  <td>
                    <button>Edit</button>
                    <button onClick={(e) => handleDelete(row._id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>

      <br />
      <hr />
      <h1>Add Articles</h1>
      <AddArticle />
    </div>
  );
};

export default App;
