import { useState, useEffect } from 'react';
import TestimonialCard from './TestimonialCard';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import '../styles/testimonials.css';

const testimonials = [
  {
    id: 1,
    name: 'Rao Ali Tahir',
    role: 'Business Developer, PureLogics Pvt Limited',
    text: 'His ability to write clean and efficient code, implement responsive designs, optimize performance, or collaborate effectively, made a significant impact on the project. Adnan consistently delivered high-quality work, met deadlines, and was always open to feedback.',
    avatar: '/assets/images/testimonials/client1.jpg',
  },
  {
    id: 2,
    name: 'Rao Muzammil Naseem',
    role: 'ReactJS Front-End Developer, Freelancer',
    text: 'What stood out most was his trait of giving attention to detail. I highly recommend Muhammad Adnan Tahseen for any development or design role and would gladly work with him again!',
    avatar: '/assets/images/testimonials/client2.png',
  },
  // Add more testimonials
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoSlide, setAutoSlide] = useState(true);

  useEffect(() => {
    if (!autoSlide) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoSlide, testimonials.length]);

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    setAutoSlide(false);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
    setAutoSlide(false);
  };

  return (
    <div className="testimonials-container">
      <h1>Testimonials</h1>
      <div className="testimonials-slider">
        <button onClick={goToPrev} className="slider-button">
          <FaArrowLeft />
        </button>
        
        <TestimonialCard testimonial={testimonials[currentIndex]} />
        
        <button onClick={goToNext} className="slider-button">
          <FaArrowRight />
        </button>
      </div>
      <div className="slider-dots">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => {
              setCurrentIndex(index);
              setAutoSlide(false);
            }}
          />
        ))}
      </div>
      <button 
        onClick={() => setAutoSlide(!autoSlide)} 
        className="auto-slide-toggle"
      >
        {autoSlide ? 'Pause Auto Slide' : 'Start Auto Slide'}
      </button>
    </div>
  );
};

export default Testimonials;