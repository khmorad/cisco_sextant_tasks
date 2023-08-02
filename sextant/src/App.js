import React, { useState, useEffect } from 'react';
import './componentStyling/App.css';
import NavBar from './components/NavBar';
import WebSocketComponent from './components/WebSocketComponent';
import SystemIp from './components/SystemIp';
import Clock from './components/Clock'; // Import the Clock component

function App() {
  const [showClock, setShowClock] = useState(true);

  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth <= 768) {
        setShowClock(false);
      } else {
        setShowClock(true);
      }
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleWindowResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <div className="masterwrapper">
      <div className="mastercontainer">
        <div className="component">
          <NavBar />
        </div>
        <div className="component">
          <WebSocketComponent />
        </div>
      
        <div className="component">
          <SystemIp />
        </div>
      </div>
    </div>
  );
}

export default App;
