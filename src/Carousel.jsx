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
    <div className="carousel">
      <button onClick={prevSlide} className="prev">❮</button>
      <div className="carousel-slide">
        <img src={slides[currentIndex]} alt={`Slide ${currentIndex}`} />
      </div>
      <button onClick={nextSlide} className="next">❯</button>
    </div>
  );
};

export default Carousel;

{/*
    for the links here the idea is to use {data.projectsData.description[index]} this as the link getter to current project like so 

    we just need to pass an array and it will handle the rest
    
    just like this

    <Carousel slides={slides} />

    const App = () => {
    const slides = [
    'https://via.placeholder.com/600x300?text=Slide+1',
    'https://via.placeholder.com/600x300?text=Slide+2',
    'https://via.placeholder.com/600x300?text=Slide+3'
  ];*/}