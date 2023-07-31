import React, { useEffect, useState } from 'react';
import WebSocketClient from './WebSocketClient';

const WebSocketComponent = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const wsClient = WebSocketClient();

    wsClient.onmessage = (event) => {
        const timestamp = parseInt(event.data);
        const date = new Date(timestamp);
        setMessage(date.toLocaleString()); 
    };

    return () => {
      wsClient.close();
    };
  }, []);

  return (
    <div>
      <h1>WebSocket Messages</h1>
      <p>{message}</p>
    </div>
  );
};

export default WebSocketComponent;
