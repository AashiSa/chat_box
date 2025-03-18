import React, { useState } from "react";
import axios from "axios";
import "../App.css";

const Home = () => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
      setData(response.data);
    } catch (error) {
      setData({ error: "Failed to fetch data" });
    }
  };

  return (
    <div className="home-container">
      <button onClick={fetchData}>Pod Analyser</button>
      <div className="response-box">
        {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
      </div>
    </div>
  );
};

export default Home;
