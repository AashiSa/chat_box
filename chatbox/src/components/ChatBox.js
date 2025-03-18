import React, { useState } from "react";
import axios from "axios";
import "../App.css";

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (input.trim()) {
      const userMessage = { text: input, sender: "You" };
      setMessages((prevMessages) => [...prevMessages, userMessage]);

      const replyResponse = await getreplyResponse(input);
      setMessages((prevMessages) => [...prevMessages, replyResponse]);

      setInput(""); // Clear input field after sending
    }
  };

  const getreplyResponse = async (message) => {
    if (message.toLowerCase() === "hi") {
      return { text: "Hi! I am happy to help you. Would you like to know the status of your app?" };
    }
    if (message.toLowerCase() === "yes") {
      return { text: "Please provide your app ID to check the status." };
    }

    try {
      const response = await axios.get(`http://localhost:5000/status?app=${message}`);
      return { text: `The status of ${message} is: ${response.data.status}` };
    } catch (error) {
      return { text: "Sorry, I couldn't fetch the app status. Please try again." };
    }
  };

  return (
    <div className="chat-container">
     <div className="chat-window">
  {messages.map((msg, index) => (
    <div key={index} className={msg.sender === "You" ? "user-message" : "reply-message"}>
      {msg.text}
    </div>
  ))}
</div>

      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="chat-input"
          placeholder="Type a message..."
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSend();
            }
          }}
        />
        <button onClick={handleSend} className="send-button">Send</button>
      </div>
    </div>
  );
};

export default ChatBox;
