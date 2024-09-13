import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignIn.css';
import { toast } from 'react-toastify';
import SummaryApi from '../../Common';
import Context from '../../context';

const SignIn = ({ setIsSignedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const {fetchUserDetails}  = useContext(Context)

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

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
      
        // Ensure fetchUserDetails is called before navigation
        fetchUserDetails().then(() => {
          setIsSignedIn(true);
          localStorage.setItem('accessToken', dataApi.data.accessToken);
          navigate('/');
        }).catch(err => {
          toast.error("Error fetching user details");
        });
      
      } else if (dataApi.error) {
        toast.error(dataApi.message);
      }

      console.log('Email:', email);
      console.log('Password:', password);
    } catch (error) {
      toast.error('An error occurred. Please try again.');
      console.error('Error:', error);
    } finally {
      setLoading(false);
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
            type={showPassword ? 'text' : 'password'}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="button"
            className="toggle-password"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>
        <button type="submit" className="signin-button" disabled={loading}>
          {loading ? 'Signing In...' : 'Sign In'}
        </button>
        <p>
          Don't have an account? <Link to="/sign-up">Sign Up</Link>
        </p>
      </form>
      {loading && <div className="loading-spinner"></div>}
    </div>
  );
};

export default SignIn;
