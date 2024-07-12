import React from 'react';
import Slider from '../Components/Slider/Slider';
import TopProducts from '../Components/Topproducts/TopProducts';

const Homepage = ({ products }) => {
  return (
    <>
      <Slider />
      <TopProducts products={products} />
    </>
  );
};

export default Homepage;
