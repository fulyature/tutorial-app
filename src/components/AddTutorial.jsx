import { useState } from "react";

const AddTutorial = ({ addTutorial }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTutorial(title, description);
  };

  return (
    <div className="container">
      <h1>Add Your Tutorial</h1>
      <form onSubmit={() => console.log("submit")}>
        <div className="field-wrapper">
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
        <div className="field-wrapper">
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

        <button type="button" onClick={handleSubmit} className="btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddTutorial;
