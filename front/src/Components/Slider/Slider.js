import React, { useState } from 'react';
import './Slider.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Slider = () => {
    let images = [
        { img: "https://clipground.com/images/smart-watch-png-8.png" },
        { img: "https://www.pngmart.com/files/13/Smartwatch-PNG-Image.png" },
        { img: "https://www.pngmart.com/files/13/Smartwatch-PNG-Free-Download.png" }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const previous = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const next = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className='slider-container'>
            <div className='slider'>
                <div className='info-box'>
                    <p>YOUR PRODUCTS<br />ARE GREAT</p>
                    <button>View Products</button>
                </div>
                <div className='slider-box'>
                    <img src={images[currentIndex].img} alt="Product" />
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
