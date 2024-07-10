import React from 'react';
import Slider from '../Components/Slider/Slider';
import TopProducts from '../Components/Topproducts/TopProducts';

const Homepage = ({ products }) => {
  return (
    <>
      {/* Render Slider component */}
      <Slider />

      {/* Render TopProducts component with products data */}
      <TopProducts products={products} />
    </>
  );
};

export default Homepage;
