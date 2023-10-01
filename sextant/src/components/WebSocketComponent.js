import React, { useEffect, useState } from 'react';
import WebSocketClient from '../WebSocketClient';
import '../componentStyling/Websocket.css';

const WebSocketComponent = () => {
  const [message, setMessage] = useState('');
  const [latency, setLatency] = useState(0);

  useEffect(() => {
    const wsClient = WebSocketClient();

    wsClient.onmessage = (event) => {
      const receivedTimestamp = parseInt(event.data);
      const responseTimestamp = new Date().getTime();
      const currentLatency = responseTimestamp - receivedTimestamp;

      // Set a threshold to filter out negative or very small latency values
      const minimumLatencyThreshold = 0; // Adjust this threshold value as needed

      // Update the state with the latency only if it is greater than the threshold
      if (currentLatency >= minimumLatencyThreshold) {
        const date = new Date(receivedTimestamp);
        setLatency(currentLatency);
        setMessage(date.toLocaleString());
      }
    };

    return () => {
      wsClient.close();
    };
  }, []);

  return (
    <div className="webwrapper">

<div className='webContainer latency'>
     
      <p>packet Latency</p>
      <p>  {latency} ms</p>
      
    </div>
    </div>

  );
};

export default WebSocketComponent;
