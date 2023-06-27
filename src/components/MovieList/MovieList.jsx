import MovieCard from "components/MovieCard/MovieCard";
import { useLocation, Link } from 'react-router-dom';
import propTypes from 'prop-types';
import css from './MovieList.module.css';

function MoviesList({ movies }) {
  
    return (
      <ul className={css.List}>
        {movies.map(({ id, title, poster, voteaverage, votecount }) => {
          return (
            <MovieCard
              key={id}
              id={id}
              title={title}
              poster={poster}
              voteaverage={voteaverage}
              votecount={votecount}
            />
          );
        })}
      </ul>
    );
  }

  MoviesList.propTypes = {
    movies: propTypes.arrayOf(
      propTypes.shape({
        id: propTypes.number,
        title: propTypes.string,
        poster: propTypes.string,
        voteAverage: propTypes.number,
        voteCount: propTypes.number,
      }),
    ).isRequired,
  };
  
  export default MoviesList;


