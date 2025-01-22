import React, { useEffect, useState, useRef } from 'react';
import { createWebSocket } from './utils/websocket';


const WS_URL = 'ws://localhost:8080'; // WebSocket server URL

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState('');
  const wsRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    // Initialize WebSocket connection
    const ws = createWebSocket(WS_URL);
    wsRef.current = ws;

    // Handle incoming messages
    ws.onmessage = (event) => {
      const newMessage = event.data;
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    };

    // Cleanup WebSocket on component unmount
    return () => {
      ws.close();
    };
  }, []);

  const sendMessage = () => {
    if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
      wsRef.current.send(input);
      setInput(''); // Clear input after sending
    } else {
      console.error('WebSocket connection is not open');
    }
  };

  return (
    <div>
      <h1>WebSocket Chat</h1>
      <div style={{ border: '1px solid #ccc', padding: '10px', height: '200px', overflowY: 'scroll' }}>
        {messages.map((msg, idx) => (
          <div key={idx}>{msg}</div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Chat;
