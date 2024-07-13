import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignIn.css';
import { toast } from 'react-toastify';
import SummaryApi from '../../Common';

const SignIn = ({ setIsSignedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      email,
      password,
    };

    try {
      const dataResponse = await fetch(SummaryApi.signIN.url, {
        method: SummaryApi.signIN.method,
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const dataApi = await dataResponse.json();

      if (dataApi.success) {
        toast.success(dataApi.message);
        setIsSignedIn(true);
        localStorage.setItem('isSignedIn', 'true'); // Persist the sign-in status
        navigate('/');
      } else if (dataApi.error) {
        toast.error(dataApi.message);
      }

      console.log('Email:', email);
      console.log('Password:', password);
    } catch (error) {
      toast.error('An error occurred. Please try again.');
      console.error('Error:', error);
    }
  };

  return (
    <div className="signin-container">
      <form className="signin-form" onSubmit={handleSubmit}>
        <h2>Sign In</h2>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign In</button>
        <p>
          Don't have an account? <Link to="/sign-up">Sign Up</Link>
        </p>
      </form>
    </div>
  );
};

export default SignIn;
