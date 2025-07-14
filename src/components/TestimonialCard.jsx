import StarRating from './StarRating';
import '../styles/testimonials.css';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="testimonial-card">
      {/* Client Image at Top */}
      <div className="client-image-container">
        <img 
          src={testimonial.avatar} 
          alt={testimonial.name} 
          className="client-avatar"
        />
      </div>

      {/* Text Content Below */}
      <div className="testimonial-content">
        <div className="quote-icon">“</div>
        <p className="testimonial-text">{testimonial.text}</p>
        <StarRating rating={testimonial.rating} />
        <div className="client-info">
          <h4>{testimonial.name}</h4>
          <p className="client-role">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;