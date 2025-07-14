import { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import TestimonialCard from './TestimonialCard';
import '../styles/testimonials.css';

const testimonials = [
  {
    id: 1,
    name: 'Rao Ali Tahir',
    role: 'Business Developer, PureLogics Pvt Limited',
    text: 'His ability to write clean and efficient code, implement responsive designs, optimize performance, or collaborate effectively, made a significant impact on the project. Adnan consistently delivered high-quality work, met deadlines, and was always open to feedback.',
    avatar: '/assets/images/testimonials/client1.jpg',
    rating: 4.7
  },
  {
    id: 2,
    name: 'Rao Muzammil Naseem',
    role: 'ReactJS Front-End Developer, Freelancer',
    text: 'What stood out most was his trait of giving attention to detail. I highly recommend Muhammad Adnan Tahseen for any development or design role and would gladly work with him again!',
    avatar: '/assets/images/testimonials/client2.png',
    rating: 4.8
  },
  // Add more testimonials
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoSlide, setAutoSlide] = useState(true);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Handle touch events for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) goToNext(); // Swipe left
    if (distance < -50) goToPrev(); // Swipe right
    setTouchStart(null);
    setTouchEnd(null);
  };

  // Auto-slide logic
  useEffect(() => {
    if (!autoSlide) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => 
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [autoSlide, testimonials.length]);

  const goToPrev = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
    setAutoSlide(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
    setAutoSlide(false);
  };

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="section-header">
        <h2>Client Testimonials</h2>
        <p>What people say about my work</p>
      </div>

      <div 
        className="testimonial-slider"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <button 
          className="slider-arrow left" 
          onClick={goToPrev}
          aria-label="Previous testimonial"
        >
          <FaArrowLeft />
        </button>

        <div className="slider-track">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className={`slide ${index === currentIndex ? 'active' : ''}`}
              style={{
                transform: `translateX(${100 * (index - currentIndex)}%)`,
                opacity: index === currentIndex ? 1 : 0
              }}
            >
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>

        <button 
          className="slider-arrow right" 
          onClick={goToNext}
          aria-label="Next testimonial"
        >
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
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>

      {/* <button 
        className={`auto-slide-toggle ${autoSlide ? 'active' : ''}`}
        onClick={() => setAutoSlide(!autoSlide)}
      >
        {autoSlide ? '❚❚ Pause' : '▶ Play'}
      </button> */}
    </section>
  );
};

export default Testimonials;