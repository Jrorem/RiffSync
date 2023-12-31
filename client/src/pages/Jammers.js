import React, { useState } from 'react';

import ChatApp from '../ChatApp'; // Import the ChatApp component

function Jammers() {
  const [username, setUsername] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleUsernameSubmit = (e) => {
    e.preventDefault();
    if (username.trim() !== '') {
      setLoggedIn(true);
    }
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent form submission
      handleUsernameSubmit(e);
    }
  };

  return (
    
    <div className="container"> 
      <div className="home">
      <h1 className="text-3xl font-bold underline">
                    Chat with other Jammers
    </h1>
      </div>
      {/* <h3>Chat</h3> */}
      <div className='content'>
      <div className="home-team-card h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
      <div className="chat-container">
        {!loggedIn ? (
          <div className="login-container">
            <form onSubmit={handleUsernameSubmit}>
              <label>
                {/* Enter your username: */}
                <input
                  type="text"
                  value={username}
                  onChange={handleUsernameChange}
                  onKeyDown={handleKeyPress}
                  placeholder="Enter your handle..."
                />
              </label>
              {/* <button type="submit">Login</button> */}
            </form>
          </div>
        ) : (
          <ChatApp username={username} />
        )}
        </div>
      </div>
      {/* Other content of the Jammers component */}
    </div>
    </div>
  );
}

export default Jammers;