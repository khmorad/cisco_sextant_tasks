import React, { useState, useEffect } from 'react';
import '../componentStyling/NavBar.css';
import Clock from './Clock';

export default function NavBar() {
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
    <div className="nvContainer">
      <div className='nav'>
        <div className='dashboard'>Sextant Dashboard</div>
        {showClock && ( // Conditionally render Clock based on showClock state
          <div className='clock'>
            <Clock />
          </div>
        )}
      </div>
    </div>
  );
}
