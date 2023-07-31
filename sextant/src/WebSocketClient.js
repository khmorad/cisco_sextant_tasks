// WebSocketClient.js
const WebSocketClient = () => {
    const ws = new WebSocket('ws://localhost:55455'); // Replace 'localhost' with your backend server address if it's hosted elsewhere
  
    ws.onopen = () => {
      console.log('WebSocket connection established.');
    };
  
    ws.onmessage = (event) => {
      console.log('Message received:', event.data); // You can handle the received messages here
    };
  
    ws.onerror = (error) => {
      console.error('WebSocket error:', error);
    };
  
    ws.onclose = (event) => {
      console.log('WebSocket connection closed:', event);
    };
  
    return ws;
  };
  
  export default WebSocketClient;
  