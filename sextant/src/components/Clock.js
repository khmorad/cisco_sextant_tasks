import React, { useEffect, useState } from 'react';
import '../componentStyling/Websocket.css';
import '../componentStyling/Clock.css';

export default function Clock() {
  const [clock, setClock] = useState('');

  useEffect(() => {
    const intervalId = setInterval(updateClock, 1000);

    // Clean up the interval on component unmount
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const updateClock = () => {
    const time = new Date();
    const hour = time.getHours();
    const minute = time.getMinutes().toString().padStart(2, '0');
    const second = time.getSeconds().toString().padStart(2, '0');
    const ampm = hour >= 12 ? 'PM' : 'AM';
    //ensures that if the hour is exactly divisible by 12
    const formattedHours = hour % 12 === 0 ? 12 : hour % 12;
    setClock(`${formattedHours}:${minute}:${second} ${ampm}`);
  };

  return (
  <div >
    {clock}
  </div>);
}
