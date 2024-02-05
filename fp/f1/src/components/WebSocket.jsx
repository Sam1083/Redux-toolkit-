// WebSocketComponent.jsx
import React, { useState, useEffect } from 'react';

const WebSocket = ({ onMessageReceived }) => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = new WebSocket('ws://localhost:5000');

    newSocket.addEventListener('open', (event) => {
      console.log('WebSocket connection opened:', event);
    });

    newSocket.addEventListener('message', (event) => {
      const message = JSON.parse(event.data);
      console.log('Received message:', message);
      // Pass the received message to the parent component
      onMessageReceived(message);
    });

    newSocket.addEventListener('close', (event) => {
      console.log('WebSocket connection closed:', event);
    });

    newSocket.addEventListener('error', (error) => {
      console.error('WebSocket error:', error);
    });

    setSocket(newSocket);

    return () => {
      newSocket.close();
    };
  }, [onMessageReceived]);

  const sendMessage = (message) => {
    if (socket && socket.readyState === WebSocket.OPEN) {
      socket.send(JSON.stringify(message));
    }
  };

  return null; // This component doesn't render anything in the DOM
};

export default WebSocket;
