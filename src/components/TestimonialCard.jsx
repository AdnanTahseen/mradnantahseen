import '../styles/testimonials.css';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-avatar">
        <img src={testimonial.avatar} alt={testimonial.name} />
      </div>
      <div className="testimonial-content">
        <p className="testimonial-text">"{testimonial.text}"</p>
        <div className="testimonial-author">
          <h4>{testimonial.name}</h4>
          <p>{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;