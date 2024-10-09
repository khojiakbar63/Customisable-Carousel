import React from 'react';
import Carousel from './carousel';
import './index.css'
import Image_1 from './assets/images/pexels-nout-gons-80280-248159.jpg'
import Image_2 from './assets/images/i2.jpg'
import Image_3 from './assets/images/i3.jpg'
import Image_4 from './assets/images/i4.jpg'
import Image_5 from './assets/images/i5.jpg'
import Image_6 from './assets/images/i6.jpg'

const images = [
  Image_1,
  Image_2,
  Image_3,
  Image_4,
  Image_5,
  Image_6
];

const App: React.FC = () => {
  return (
    <div style={container.wrapper}>
      <h1 style={styles.title}>My Wide Image Carousel</h1>
      <Carousel images={images} />
    </div>
  );
};
interface ContaineType {
  display: string;
  flexDirection: string;
  alignItems: string;
  justifyContent: string;
  height: string;
  background: string;
}
const container : { wrapper:ContaineType} = {
  wrapper:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'start',
    height: '100vh',
    background: '#f5f5f5', // Light grey background}
  }
}
const styles = {
  title: {
    fontSize: '3rem',              // Large font size for the title
    fontFamily: "'Playfair Display', serif", // Elegant serif font
    fontWeight: '700',             // Bold font for emphasis
    color: '#333',                 // Dark color for contrast
    textShadow: '2px 2px 8px rgba(0, 0, 0, 0.3)', // Subtle shadow for depth
    letterSpacing: '2px',          // Spacing between letters for a clean look
    marginBottom: '60px',          // Space between title and carousel
    background: 'linear-gradient(to right, #ff7e5f, #feb47b)', // Beautiful gradient background
    WebkitBackgroundClip: 'text',  // Clip the gradient to the text
    WebkitTextFillColor: 'transparent', // Make the text transparent to show the gradient
  }
};

export default App;