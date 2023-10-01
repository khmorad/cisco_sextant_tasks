import React from 'react';
import './componentStyling/App.css';
import Banner from './components/Banner';
import WebSocketComponent from './components/WebSocketComponent';
import SystemIp from './components/SystemIp';
import Exhibit from './components/Exhibit'; // Import the Exhibit component

function App() {
  return (
    <div className="masterwrapper">
      <div className="mastercontainer">
        <Exhibit >
          <Banner />
        </Exhibit>
        
        <Exhibit >
          <WebSocketComponent />
        </Exhibit>
        
        <Exhibit >
          <SystemIp />
        </Exhibit>
      </div>
    </div>
  );
}

export default App;
