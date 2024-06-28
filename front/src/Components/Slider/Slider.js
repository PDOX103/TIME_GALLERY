import React, { useState } from 'react';
import './Slider.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Slider = () => {
    const images = [
        { img: "https://www.pngmart.com/files/13/Smartwatch-PNG-Image.png" },
        { img: "https://clipground.com/images/smart-watch-png-8.png" } 
    ];

    const [count, setCount] = useState(0);

    const previous = () => {
        setCount((prevCount) => (prevCount === 0 ? images.length - 1 : prevCount - 1));
    };

    const next = () => {
        setCount((prevCount) => (prevCount === images.length - 1 ? 0 : prevCount + 1));
    };

    return (
        <div className='slider-container'>
            <div className='slider'>
                <div className='info-box'>
                    <p>WE PROVIDE<br />AUTHENTIC PRODUCTS</p>
                    <button>View Products</button>
                </div>
                <div className='slider-box'>
                    <img src={images[count].img} alt="Product" className='slider-image' />
                </div>
                <ArrowBackIosIcon
                    className='arrow-icon'
                    sx={{ position: "absolute", top: "36%", left: "1%", fontSize: "75px", cursor: "pointer" }}
                    onClick={previous}
                />
                <ArrowForwardIosIcon
                    className='arrow-icon'
                    sx={{ position: "absolute", top: "36%", right: "1%", fontSize: "75px", cursor: "pointer" }}
                    onClick={next}
                />
            </div>
        </div>
    );
};

export default Slider;
