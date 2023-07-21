import axios from "axios";
import { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";

const EditTutorial = ({ show, tutorial, handleClose, handleSave }) => {
  console.log(tutorial, "fulya");
  const [title, setTitle] = useState(tutorial?.title);
  const [description, setDescription] = useState(tutorial?.description);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Tutorial</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            const { id } = tutorial;
            handleSave(id, title, description);
          }}
        >
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditTutorial;
