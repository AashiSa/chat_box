import React, { useState } from "react";
import axios from "axios";
import "./ChatBox.css"; // Import CSS file

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (input.trim()) {
      const userMessage = { text: input, sender: "You" };
      setMessages([...messages, userMessage]);

      const botResponse = await getBotResponse(input);
      setMessages((prevMessages) => [...prevMessages, botResponse]);

      setInput(""); // Clear input field after sending
    }
  };

  const getBotResponse = async (message) => {
    if (message.toLowerCase() === "hi") {
      return { text: "Hi! Would you like to check the status of your app?" };
    }
    if (message.toLowerCase() === "yes") {
        return { text: "Please provide your app ID to check the status.", sender: "Bot" };
      }
  
    try {
      const response = await axios.get(`http://localhost:3000?app=${message}`);
      return { text: `The status of ${message} is: ${response.data.status}`, sender: "Bot" };
    } catch (error) {
      return { text: "Sorry, I couldn't fetch the app status. Please try again.", sender: "Bot" };
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-window">
        {messages.map((msg, index) => (
          <div key={index} className={msg.sender === "You" ? "user-message" : "bot-message"}>
            <strong>{msg.sender}:</strong> {msg.text}
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
        />
        <button onClick={handleSend} className="send-button">Send</button>
      </div>
    </div>
  );
};

export default ChatBox;
