import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const Login = () => {
  const [currentState, setCurrentState] = useState('Login');
  const { token, setToken, navigate } = useContext(ShopContext);
  const backendUrl = 'https://time-gallery-backend.vercel.app';

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false); 
  const [showPassword, setShowPassword] = useState(false); 

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setLoading(true); 

    setTimeout(async () => {
      try {
        if (currentState === 'Sign Up') {
          const response = await axios.post(backendUrl + '/api/user/register', { email, name, password });
          if (response.data.success) {
            setToken(response.data.token);
            localStorage.setItem('token', response.data.token);
          } else {
            toast.error(response.data.message);
          }
        } else {
          const response = await axios.post(backendUrl + '/api/user/login', { email, password });
          if (response.data.success) {
            setToken(response.data.token);
            localStorage.setItem('token', response.data.token);
          } else {
            toast.error(response.data.message);
          }
        }
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      } finally {
        setLoading(false); 
      }
    }, 1000); 
  };

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [token]);

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800">
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>

      {/* Conditionally render Name input field for Sign Up */}
      {currentState === 'Login' ? null : (
        <input
          onChange={(e) => setName(e.target.value)} value={name}
          type="text"
          className="w-full px-3 py-2 border border-gray-800"
          placeholder="Name"
          required
        />
      )}

      <input
        onChange={(e) => setEmail(e.target.value)} value={email}
        type="email"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Email"
        required
      />
      
      {/* Password input with show/hide functionality */}
      <div className="relative w-full">
        <input
          onChange={(e) => setPassword(e.target.value)} value={password}
          type={showPassword ? 'text' : 'password'} 
          className="w-full px-3 py-2 border border-gray-800"
          placeholder="Password"
          required
        />
        <span 
          className="absolute right-3 top-3 cursor-pointer"
          onClick={() => setShowPassword(!showPassword)} 
        >
          {showPassword ? <VisibilityOff /> : <Visibility />}
        </span>
      </div>

      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className="cursor-pointer">Forgot Your Password?</p>

        {/* Toggle between Login and Sign Up */}
        {currentState === 'Login' ? (
          <p onClick={() => setCurrentState('Sign Up')} className="cursor-pointer">
            Create Account
          </p>
        ) : (
          <p onClick={() => setCurrentState('Login')} className="cursor-pointer">
            Login Here
          </p>
        )}
      </div>

      <button className="bg-black text-white font-light px-8 py-2 mt-4" disabled={loading}>
        {loading ? 'Loading...' : currentState === 'Login' ? 'Sign In' : 'Sign Up'}
      </button>

      {/* Display loading circle when loading */}
      {loading && <div className="loader mt-4"></div>}
    </form>
  );
};

export default Login;
