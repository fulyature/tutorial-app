import React from "react";

const AddTutorial = () => {
  return (
    <div>
      <h1>Add Your Tutorial</h1>
      <form>
        <div>
          <label>Title</label>
          <input id="title" placeholder="Enter your title" type="text" />
        </div>
        <div>
          <label>Description</label>
          <input id="desc" placeholder="Enter your description" type="text" />
        </div>
        <button type="submit" className="btn btn-danger mb-4">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddTutorial;
