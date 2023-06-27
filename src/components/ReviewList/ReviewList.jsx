import css from './ReviewsList.module.css';
import propTypes from 'prop-types';

function ReviewsList({ reviews }) {
  return (
    <div>
      <ul className={css.Yes}>
        {reviews.map(({ id, author, text }) => {
          return (
            <li className={css.Reviews} key={id}>
              <p>{author}</p>
              <p>{text}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

ReviewsList.propTypes = {
  reviews: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string,
      author: propTypes.string,
      text: propTypes.string,
    }),
  ).isRequired,
};

export default ReviewsList;