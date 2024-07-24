import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import axios from "axios";

const App = () => {
  const [arr, setArr] = useState([]);

  const movieData = async () => {
    const respose = await axios.get("https://freetestapi.com/api/v1/movies");
    const data = respose.data;
    console.log(data);
    setArr(data);
  };

  return (
    <div>
      <button onClick={movieData}>click me for data retrival</button>
      <ul>
        {arr.map((e) => {
          return (
            <li>
              {e.id} {e.title} {e.year} [{e.actors[0]}]
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
