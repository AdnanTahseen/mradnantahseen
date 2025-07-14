import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import '../styles/starRating.css';

const StarRating = ({ rating }) => {
  // rating is out of 5 (e.g., 4.5)
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  for (let i = 1; i <= 5; i++) {
    if (i <= fullStars) {
      stars.push(<FaStar key={i} className="star full-star" />);
    } else if (i === fullStars + 1 && hasHalfStar) {
      stars.push(<FaStarHalfAlt key={i} className="star half-star" />);
    } else {
      stars.push(<FaRegStar key={i} className="star empty-star" />);
    }
  }

  return (
    <div className="star-rating">
      {stars}
      <span className="rating-text">({rating.toFixed(1)})</span>
    </div>
  );
};

export default StarRating;