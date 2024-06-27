import React from 'react';
import './Slider.css';

const Slider = () => {
    let images = [
        {img: "https://clipground.com/images/smart-watch-png-8.png"},
        {img: "https://www.pngmart.com/files/13/Smartwatch-PNG-Image.png"},
        {img: "https://www.pngmart.com/files/13/Smartwatch-PNG-Free-Download.png"}
    ];

    return (
        <>
            <div className='slider-container'>
                <div className='slider'>
                    <div className='info-box'>
                        <p>YOUR PRODUCTS<br />ARE GREAT</p>
                        <button>View Products</button>
                    </div>
                    <div className='slider-box'>
                        <img src={images[0].img} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Slider;
