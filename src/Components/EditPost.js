import { useContext } from "react";
import React from "react";
import DataContext from "../Context/DataContext";
import { useParams } from "react-router-dom";

const EditPost = () => {
  const { editTitle, setEditTitle, editBody, setEditBody, handleEditSubmit, posts } =
    useContext(DataContext);
  const { editId } = useParams();
  const posted = posts.find((post) => post.id === editId);

  setEditTitle(posted.title);
  setEditBody(posted.body);
  return (
    <div>
      <form onSubmit={() => handleEditSubmit(editId)}>
        <h3>Title </h3>
        <input
          type="text"
          required
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
        />
        <h3>Description</h3>
        <input
          type="text"
          required
          value={editBody}
          onChange={(e) => setEditBody(e.target.value)}
        />
        <br></br>
        <br></br>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EditPost;
