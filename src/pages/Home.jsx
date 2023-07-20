import { useEffect, useState } from "react";
import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";
import axios from "axios";

const mock = [
  {
    title: "Test",
    description: "Testing Description",
  },
  {
    title: "Test Title2",
    description: "Testing Description2",
  },
];

const Home = () => {
  const [tutorials, setTutorials] = useState(mock);

  const getTutorials = async () => {
    const BASE_URL = "https://tutorial-api.fullstack.clarusway.com/tutorials/";

    try {
      const { data } = await axios(BASE_URL);
      setTutorials(data);
    } catch (error) {
      console.log(error);
    }
  };

  const addTutorial = async (title, description) => {
    const BASE_URL = "https://tutorial-api.fullstack.clarusway.com/tutorials/";

    try {
      const { data } = await axios.post(BASE_URL, { title, description });

      const newTutorials = [...tutorials, data];
      setTutorials(newTutorials);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(tutorials);
  // Mount asamasinda api'ye istek atiyoruz
  useEffect(() => {
    getTutorials();
  }, []);

  return (
    <>
      <AddTutorial addTutorial={addTutorial} />
      <TutorialList tutorials={tutorials} getTutorials={getTutorials} />
    </>
  );
};

export default Home;
