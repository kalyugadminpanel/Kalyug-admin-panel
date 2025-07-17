import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import app from './firebase'; // firebase.js file ko import karna

const auth = getAuth(app);

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      window.location.href = '/dashboard'; // Login ke baad dashboard par le jaaye
    } catch (err) {
      setError('गलत ईमेल या पासवर्ड!');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '100px' }}>
      <form onSubmit={handleLogin} style={{ width: '300px' }}>
        <h2>Login</h2>
        <input
          type="email"
          placeholder="ईमेल डालें"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
        />
        <input
          type="password"
          placeholder="पासवर्ड डालें"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
        />
        <button type="submit" style={{ width: '100%', padding: '10px' }}>
          लॉगिन करें
        </button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
}

export default Login;
