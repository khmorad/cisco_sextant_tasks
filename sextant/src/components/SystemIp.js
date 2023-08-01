import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../componentStyling/SystemIp.css';
import '../componentStyling/Websocket.css';

const SystemIp = () => {
  const [ipv4, setIPv4] = useState(null);
  const [ipv6, setIPv6] = useState(null);

  useEffect(() => {
    fetchIPAddresses();
  }, []);

  const fetchIPAddresses = () => {
    // Replace 'YOUR_API_KEY' with your actual API key from ipify.org (optional but recommended)
    const API_KEY = 'YOUR_API_KEY';
    const API_URL = `https://api.ipify.org?format=json&apiKey=${API_KEY}`;

    axios
      .get(API_URL)
      .then((response) => {
        const { ip, ip6 } = response.data;
        setIPv4(ip);
        setIPv6(ip6);
      })
      .catch((error) => {
        console.error('Error fetching IP addresses:', error);
        setIPv4('not found');
        setIPv6('not found');
      });
  };

  return (
    <div className="webWrapper">
   <div className="webContainer"> 
      {ipv4 ? (
        <p>IPv4: {ipv4}</p>
      ) : (
        <p>IPv4: <span>was not found</span></p>
      )}

      {ipv6 ? (
        <p>IPv6: {ipv6}</p>
      ) : (
        <p>IPv6: <span>was not found</span></p>
      )}
    </div>
    </div>
 
  );
};

export default SystemIp;