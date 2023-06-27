import {Link, useLocation} from 'react-router-dom';
import propTypes from 'prop-types';
import css from './MovieCard.module.css';

function MovieCard({id, title, poster, voteaverage, votecount}) {
  const location = useLocation();

  return (
    <li>
    <Link className={css.Card} to={`/movies/${id}`} state={{from: location}}>

    <img height="500px"
      src={poster ? `https://image.tmdb.org/t/p/w500/${poster}` : 'no Poster'}
      alt={title}
    />
    <div>
      <h3 className={css.Title}>{title ? title : 'Holly CRAP'}</h3>
      <p className={css.Vote1}>{voteaverage}%</p>
      <p className={css.Vote2}>👍{votecount}</p>
    </div>
  </Link>
  </li>
  )
}

MovieCard.propTypes = {
  id: propTypes.number,
  title: propTypes.string,
  poster: propTypes.string,
  voteAverage: propTypes.number,
  voteCount: propTypes.number,
};

export default MovieCard;