import React, { useState, useEffect } from 'react';
import '../componentStyling/Banner.css';
import Clock from './Clock';

export default function Banner() {
  const [showClock, setShowClock] = useState(true);

  useEffect(() => {
    // Define a function to handle window resize
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
  }, []); // Empty dependency array ensures the effect runs only once on mount

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
