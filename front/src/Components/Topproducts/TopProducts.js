import React from 'react';
import "./TopProducts.css";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

const TopProducts = ({ products }) => {
  return (
    <>
      <div className='mainHeadingDiv'>
        <div className='headingD'>
          <h1>OUR COLLECTIONS_</h1>
        </div>
      </div>
      <div className="topproducts-container">
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 7, md: 27 }}
            className="mainGrid"
          >
            {products.map((product, index) => (
              <Grid xs={2} sm={4} key={index} className="allbox">
                <Box
                  component="img"
                  sx={{
                    width: '205px',
                    height: '200px',
                    margin: '0 auto' // Center the image horizontally
                  }}
                  src={product.img}
                  alt={product.title}
                />
                <Typography variant="subtitle1" align="center" sx={{ marginTop: '10px', color: 'black' }}>
                  {product.title}
                </Typography>
                <Typography variant="body2" align="center" sx={{ color: 'black', fontWeight: 'bold' }}>
                  {`Price: ${product.price}`}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    </>
  );
};

export default TopProducts;
