import React, { useEffect } from 'react';

const UrlHandler = () => {
  useEffect(() => {
    // Extract URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('userid');
    const hardwareId = urlParams.get('hardwareid');

    // Make a call to the backend
    if (userId && hardwareId) {
      fetch(`https://your-backend-url.com/api/process`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId, hardwareId }),
      })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
    }
  }, []);

  return (
    <div>
      <h1>Your request has been processed</h1>
    </div>
  );
};

export default UrlHandler;