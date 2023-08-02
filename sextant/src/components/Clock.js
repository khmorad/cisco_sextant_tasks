import React, { useEffect, useState } from 'react';
import WebSocketClient from '../WebSocketClient';
import '../componentStyling/Websocket.css';
export default function Clock() {
    const [message, setMessage] = useState('');
    const [latency, setLatency] = useState(0);
  
    useEffect(() => {
        const wsClient = WebSocketClient();
    
        wsClient.onmessage = (event) => {
          const receivedTimestamp = parseInt(event.data);
          const responseTimestamp = new Date().getTime(); 
          const date = new Date(receivedTimestamp);    
         setMessage(date.toLocaleString());
          
        };
    
        return () => {
          wsClient.close();
        };
      }, []);
    
  return (
    <div>
      {message}
    </div>
  )
}
