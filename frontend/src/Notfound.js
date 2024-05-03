import React from 'react';
import './NotFound.css'; // Import your CSS file for styling

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-header">404 - Page Not Found</h1>
      <p className="not-found-message">Oops! The page you are looking for doesn't exist.</p>
      <img className="not-found-image" src="/path/to/404-image.png" alt="404 Not Found" />
      {/* You can replace "/path/to/404-image.png" with the actual path to your 404 image */}
    </div>
  );
};

export default NotFound;
