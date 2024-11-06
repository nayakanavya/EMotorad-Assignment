import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState(null);

  const handleLoginSuccess = (response) => {
    setUser(response);
    console.log("User authenticated:", response);
  };

  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <div className="App">
        <h1>Welcome to Emotorad Dashboard</h1>
        {user ? (
          <div>
            <h2>Welcome, {user.profileObj.name}</h2>
          </div>
        ) : (
          <GoogleLogin
            onSuccess={handleLoginSuccess}
            onError={() => console.log('Login Failed')}
          />
        )}
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
