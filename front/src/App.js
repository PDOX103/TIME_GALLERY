import React, { useEffect, useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import myJsonData from './Components/TopsearchesData.json';
import Footer from './Components/Footer';
import Homepage from './PAGES/Homepage';
import SignIn from './Components/SignUp/SignIn';
import SignUp from './Components/SignUp/SignUp';
import SummaryApi from './Common';
import Profile from './Components/SignUp/Profile';

function App() {
  const [filteredProducts, setFilteredProducts] = useState(myJsonData);
  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleSearch = (query) => {
    if (query === '') {
      setFilteredProducts(myJsonData);
    } else {
      const filtered = myJsonData.filter(product =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  const fetchUserDetails = async () => {
    try {
        const dataResponse = await fetch(SummaryApi.current_user.url, {
            method: SummaryApi.current_user.method,
            credentials: 'include'
        });
        const dataApi = await dataResponse.json();
        console.log("Current User Data:", dataApi); // Debugging log
        if (dataApi.success) {
            setIsSignedIn(true);
            localStorage.setItem('isSignedIn', 'true'); // Persist the sign-in status
        } else {
            setIsSignedIn(false);
            localStorage.setItem('isSignedIn', 'false'); // Persist the sign-out status
        }
    } catch (error) {
        console.error("Failed to fetch current user details", error);
        setIsSignedIn(false);
        localStorage.setItem('isSignedIn', 'false');
    }
};


  useEffect(() => {
    const storedSignInStatus = localStorage.getItem('isSignedIn');
    if (storedSignInStatus === 'true') {
      setIsSignedIn(true);
    } else {
      setIsSignedIn(false);
    }

    fetchUserDetails();
  }, []);

  return (
    <>
      <Navbar onSearch={handleSearch} isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} />
      <Routes>
        <Route path="/" element={<Homepage products={filteredProducts} />} />
        <Route path="/sign-in" element={<SignIn setIsSignedIn={setIsSignedIn} />} /> {/* Add SignIn route */}
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
