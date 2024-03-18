import React, { useState } from 'react';
import DownloadPage from './downloadPage';

const LoginPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(username, password);
  };

  const handleLogin = (username, password) => {
    if (username === 'Theodorus' && password === 'aduh') {
      setIsLoggedIn(true);
    } else {
      alert('Login failed. Please try again.');
    }
  };

  return (
    <React.Fragment>
        {
            isLoggedIn ? (
                <DownloadPage username={username} password={password}/>
            ):(
                <div>
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
            )
        }
    </React.Fragment>
  );
};

export default LoginPage
