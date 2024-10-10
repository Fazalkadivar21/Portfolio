import React, { useState } from 'react';

const Carousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="carousel flex justify-between items-center">
      <button onClick={prevSlide} className="prev p-2">❮</button>
      <div className="carousel-slide">
        <img src={slides[currentIndex]} alt={`Slide ${currentIndex}`} />
      </div>
      <button onClick={nextSlide} className="next p-2">❯</button>
    </div>
  );
};

export default Carousel;