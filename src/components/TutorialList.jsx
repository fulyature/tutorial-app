import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import axios from "axios";

const TutorialList = ({ tutorials, getTutorials }) => {
  const handleDelete = async (id) => {
    const BASE_URL = "https://tutorial-api.fullstack.clarusway.com/tutorials/";

    try {
      await axios.delete(`${BASE_URL}${id}/`);
    } catch (error) {
      console.log(error);
    }
    getTutorials();
  };
  return (
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
                <FaEdit size={30} type="button" className="edit" />
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
  );
};

export default TutorialList;
