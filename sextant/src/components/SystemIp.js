import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../componentStyling/SystemIp.css';
import '../componentStyling/Websocket.css';

const SystemIp = () => {
  const [ipv4, setIPv4] = useState(null); // State to hold the IPv4 address
  const [ipv6, setIPv6] = useState(null); // State to hold the IPv6 address

  useEffect(() => {
    fetchIPAddresses(); // Fetch IP addresses when the component mounts
  }, []);

  const fetchIPAddresses = () => {
    // Replace 'YOUR_API_KEY' with your actual API key from ipify.org (optional but recommended)
    const API_KEY = 'YOUR_API_KEY';
    const API_URL = `https://api.ipify.org?format=json&apiKey=${API_KEY}`;

    axios
      .get(API_URL)
      .then((response) => {
        const { ip, ip6 } = response.data; // Extract IPv4 and IPv6 addresses from the API response
        setIPv4(ip); // Set the IPv4 address in the state
        setIPv6(ip6); // Set the IPv6 address in the state
      })
      .catch((error) => {
        console.error('Error fetching IP addresses:', error);
        setIPv4('not found'); // Set default value for IPv4 address in case of error
        setIPv6('not found'); // Set default value for IPv6 address in case of error
      });
  };

  return (
    <div className="webWrapper">
      <div className="webContainer">
        {ipv4 ? ( // Check if IPv4 address is available
          <p>IPv4: {ipv4}</p>
        ) : (
          <p>IPv4: <span>was not found</span></p>
        )}

        {ipv6 ? ( // Check if IPv6 address is available
          <p>IPv6: {ipv6}</p>
        ) : (
          <p>IPv6: <span>was not found</span></p>
        )}
      </div>
    </div>
  );
};

export default SystemIp;
