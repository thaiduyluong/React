import React from "react";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './Banner.scss'



const divStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '500px'
}

const slideImages = [
    {
      url: 'https://bighome.vn/wp-content/uploads/2023/02/banner-dai-dich-vu.jpg',
    },
    {
      url: 'https://anhuygroupluxury.vn/storage/slider/2/banner-01.jpg',
    },
    {
      url: 'https://bighome.vn/wp-content/uploads/2023/01/Banner-NTHD.jpg',
    },
  ];

const  Banner = () => {
    return (
        <div className="slide-container">
          <Slide>
           {slideImages.map((slideImage, index)=> (
              <div key={index}>
                <div style={{ ...divStyles, 'backgroundImage': `url(${slideImage.url})` }}>
                </div>
              </div>
            ))} 
          </Slide>
        </div>
      );
}

export default Banner;