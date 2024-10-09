import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";


// Props interface for the carousel
interface CarouselProps {
  images: string[]; // Array of image URLs
}

// Custom arrow component
const NextArrow: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
  return (
    <div
      style={{
        position: 'absolute',
        top: '45%',
        right: '-100px',
        fontSize: '30px',
        cursor: 'pointer',
        zIndex: 1,
        color: '#000'
      }}
      onClick={onClick}
    >
     <GrNext/>
    </div>
  );
};

const PrevArrow: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
  return (
    <div
      style={{
        position: 'absolute',
        top: '45%',
        left: '-100px',
        fontSize: '30px',
        cursor: 'pointer',
        zIndex: 1,
        color: '#000'
      }}
      onClick={onClick}
    >
      <GrPrevious/>
    </div>
  );
};

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const settings = {
    GoDash: true,         // Enables navigation dots
    infinite: true,     // Loop through the images infinitely
    speed: 500,         // Transition speed
    slidesToShow: 1,    // Show one slide at a time (for wide images)
    slidesToScroll: 1,  // Scroll one slide at a time
    autoplay: true,     // Autoplay the images
    autoplaySpeed: 3000, // Time delay between slides
    nextArrow: <NextArrow />, // Custom next arrow
    prevArrow: <PrevArrow />  // Custom prev arrow
  };

  return (
    <div style={{ width: '60%', margin: '0 auto', position: 'relative' }}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              style={{ width: '100%', height: '300px', margin: '0 auto', objectFit: 'cover'}}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
