import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import movieReview from 'API/movieReview';
import ReviewsList from 'components/ReviewList/ReviewList';
import css from './Reviews.module.css';

function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    movieReview(movieId).then(({ results }) => {
      const reviewsArray = results.map(({ id, author, content }) => ({
          id,
          author,
          text: content,
        }));
      setReviews(reviewsArray);
    });
  }, [movieId]);

  return reviews && reviews.length > 0 ? (
    <ReviewsList reviews={reviews} />
  ) : (
      <p className={css.Dont}>We don't have any reviews for this movie.</p>
  );
}

export default Reviews;