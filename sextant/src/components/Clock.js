import React, { useEffect, useState } from 'react';
import WebSocketClient from '../WebSocketClient';
import '../componentStyling/Websocket.css';

export default function Clock() {
    const [message, setMessage] = useState(''); // State to hold the received timestamp message
  
    useEffect(() => {
        const wsClient = WebSocketClient(); // Create a WebSocket client instance
    
        wsClient.onmessage = (event) => {
          const receivedTimestamp = parseInt(event.data); // Parse the received timestamp
          const date = new Date(receivedTimestamp); // Create a Date object from the timestamp
          setMessage(date.toLocaleString()); // Convert the timestamp to a readable date and time format
        };
    
        // Clean up the WebSocket connection on component unmount
        return () => {
          wsClient.close();
        };
      }, []); // Empty dependency array ensures the effect runs only once on mount
    
  return (
    <div>
      {message} {/* Display the formatted date and time */}
    </div>
  )
}
