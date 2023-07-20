import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

const TutorialList = ({ tutorials }) => {
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
        {/* aşagıda maplenen tutorials yukarda yazılan mockdate dan gelmektedır */}
        {tutorials?.map((item) => {
          const { id, title, description } = item;
          return (
            <tr key={id}>
              <td>{id}</td>
              <td>{title}</td>
              <td>{description}</td>
              <td className="actions">
                <FaEdit size={30} type="button" className="edit" />
                <AiFillDelete size={30} type="button" className="delete" />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TutorialList;
