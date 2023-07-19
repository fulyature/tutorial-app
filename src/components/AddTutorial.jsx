import { useState } from "react";

const AddTutorial = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {};

  return (
    <div className="container">
      <h1>Add Your Tutorial</h1>
      <form onSubmit={handleSubmit}>
        <div className="content">
          <div className="title-wraper">
            <label>Title</label>
            <input
              id="title"
              placeholder="Enter your title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="des-wraper">
            <label>Description</label>
            <input
              id="desc"
              placeholder="Enter your description"
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
        </div>

        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddTutorial;
