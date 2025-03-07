import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const slideImages = [
    {
        url: 'https://bighome.vn/wp-content/uploads/2023/02/banner-dai-dich-vu.jpg',
        alt: 'Banner dịch vụ'
    },
    {
        url: 'https://anhuygroupluxury.vn/storage/slider/2/banner-01.jpg',
        alt: 'Banner sản phẩm 1'
    },
    {
        url: 'https://bighome.vn/wp-content/uploads/2023/01/Banner-NTHD.jpg',
        alt: 'Banner nội thất'
    }
];

const divStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '70vh', 
    objectFit: 'cover'
};

const Banner = () => {
    return (
        <div className="slide-container">
            <Slide duration={3000} transitionDuration={500} indicators={true} arrows={true}>
                {slideImages.map((slideImage, index) => (
                    <div key={index}>
                        <div
                            style={{
                                ...divStyles,
                                backgroundImage: `url(${slideImage.url})`
                            }}
                            aria-label={slideImage.alt} 
                        ></div>
                    </div>
                ))}
            </Slide>
        </div>
    );
};

export default Banner;
