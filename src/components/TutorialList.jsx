import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

const TutorialList = () => {
  const tutorials = [
    {
      id: 1,
      title: "JS",
      description: "JS is a programming language",
    },
    {
      id: 2,
      title: "React",
      description: "JS library for UI design",
    },
  ];

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>#id</th>
            <th>Title</th>
            <th>Description</th>
            <th>Edit</th>
          </tr>
        </thead>
      </table>
      <tbody>
        {/* aşagıda maplenen tutorials yukarda yazılan mockdate dan gelmektedır */}
        {tutorials?.map((item) => {
          const { id, title, description } = item;
          return (
            <tr key={id}>
              <th>{id}</th>
              <td>{title}</td>
              <td>{description}</td>
              <td className="">
                <FaEdit size={30} type="button" className="edit" />
                <AiFillDelete size={30} type="button" className="delete" />
              </td>
            </tr>
          );
        })}
      </tbody>
    </div>
  );
};

export default TutorialList;
