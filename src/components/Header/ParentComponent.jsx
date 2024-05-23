// ParentComponent.jsx

import React, { useState } from 'react';
import Header from './Header';
import Authentication from '../../pages/Login/Login';

const ParentComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      <Header isLoggedIn={isLoggedIn} />
      {isLoggedIn ? (
        // Render logged in content
        <div>
          <p>User is logged in.</p>
        </div>
      ) : (
        // Render authentication component
        <Authentication loginSuccessful={handleLogin} />
      )}
    </div>
  );
};

export default ParentComponent;
