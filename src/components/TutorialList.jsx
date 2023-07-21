import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import axios from "axios";
import EditTutorial from "./EditTutorial";
import { useState } from "react";

const BASE_URL = "https://tutorial-api.fullstack.clarusway.com/tutorials/";

const TutorialList = ({ tutorials, getTutorials }) => {
  const [editingItem, setEditingItem] = useState(null);
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${BASE_URL}${id}`);
    } catch (error) {
      console.log(error);
    }
    getTutorials();
  };

  const handleClose = () => {
    setEditingItem();
  };

  const handleEdit = async (id, title, description) => {
    try {
      await axios.put(`${BASE_URL}${id}/`, { title, description });
    } catch (error) {
      console.log(error);
    }
    setEditingItem(null);
    getTutorials();
  };
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>#id</th>
            <th>Title</th>
            <th>Description</th>
            <th className="edit-header">Edit</th>
          </tr>
        </thead>
        <tbody>
          {tutorials?.map((item) => {
            const { id, title, description } = item;
            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{title}</td>
                <td>{description}</td>
                <td className="actions">
                  <FaEdit
                    size={30}
                    type="button"
                    className="edit"
                    data-bs-toggle="modal"
                    data-bs-target="#open-modal"
                    onClick={() => setEditingItem(item)}
                  />
                  <AiFillDelete
                    size={30}
                    type="button"
                    className="delete"
                    onClick={() => handleDelete(id)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {editingItem && (
        <EditTutorial
          tutorial={editingItem}
          show={editingItem}
          handleClose={handleClose}
          handleSave={handleEdit}
        />
      )}
    </div>
  );
};

export default TutorialList;
