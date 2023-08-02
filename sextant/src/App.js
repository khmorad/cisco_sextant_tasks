import React, { useState, useEffect } from 'react';
import './componentStyling/App.css'; // Import the main CSS file for your app
import Banner from './components/Banner';
import WebSocketComponent from './components/WebSocketComponent';
import SystemIp from './components/SystemIp';

function App() {
  const [showClock, setShowClock] = useState(true);

  useEffect(() => {
    const handleWindowResize = () => {
      // Check if the window width is 768 pixels or smaller
      if (window.innerWidth <= 768) {
        // Hide the clock component on smaller screens
        setShowClock(false);
      } else {
        // Show the clock component on larger screens
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
        {/* Render the Banner component */}
        <div className="component">
          <Banner />
        </div>
        
        {/* Render the WebSocketComponent component */}
        <div className="component">
          <WebSocketComponent />
        </div>
      
        {/* Render the SystemIp component */}
        <div className="component">
          <SystemIp />
        </div>
      </div>
    </div>
  );
}

export default App;
