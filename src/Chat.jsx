// Chat.jsx
import React, { useState } from 'react';
import './Chat.css'; // Import your styles

const predefinedMessages = [
  { name: 'John Doe', message: 'Hey, how’s it going?' },
  { name: 'Jane Smith', message: 'Pretty good! How about you?' },
  { name: 'Sam Wilson', message: 'Loving this app!' },
  { name: 'Sarah Johnson', message: 'Anyone up for a chat?' },
  { name: 'Michael Brown', message: 'I had an amazing day today!' },
  { name: 'Emily Davis', message: 'Me too! What did you do?' },
  { name: 'David Martinez', message: 'Just finished a great workout!' },
];

const Chat = () => {
  const [messages, setMessages] = useState(predefinedMessages);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, { name: 'You', message: newMessage }]);
      setNewMessage('');
    }
  };

  return (
    <div className="chat-container">
      <h1>Chat Room</h1>
      <div className="chat-box">
        {messages.map((msg, index) => (
          <div key={index} className="chat-message">
            <strong>{msg.name}: </strong>
            <span>{msg.message}</span>
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
