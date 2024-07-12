import React, { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import myJsonData from './Components/TopsearchesData.json';
import Footer from './Components/Footer';
import Homepage from './PAGES/Homepage';
import SignIn from './Components/SignUp/SignIn';
import SignUp from './Components/SignUp/SignUp';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [filteredProducts, setFilteredProducts] = useState(myJsonData);

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

  return (
    <>
      <Navbar onSearch={handleSearch} />
      <Routes>
        <Route path="/" element={<Homepage products={filteredProducts} />} />
        <Route path="/sign-in" element={<SignIn />} />  {/* Add SignIn route */}
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
