import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import Slider from './Components/Slider/Slider';
import TopProducts from './Components/Topproducts/TopProducts';
import Navbar from './Components/Navbar';
import myJsonData from './Components/TopsearchesData.json';
import Footer from './Components/Footer';

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
    
      <Navbar onSearch={handleSearch}/>
      <Slider/>
      <TopProducts products={filteredProducts}/>
      <Footer/>
    </>
  );
}

export default App;
