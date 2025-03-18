import React from "react";
import Navbar from "./components/Navbar";
import ChatBox from "./components/ChatBox";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <ChatBox />
    </div>
  );
}

export default App;
