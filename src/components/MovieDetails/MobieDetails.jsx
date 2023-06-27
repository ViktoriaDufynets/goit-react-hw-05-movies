import { Link, NavLink, useLocation } from 'react-router-dom';
import css from './MovieDetails.module.css';
import propTypes from 'prop-types';


function MovieInfo({ movieInfo }) {
  const location = useLocation();
  const subLocation = location.state.from;
  console.log(location)



  const {
    title,
    genres,
    description,
    poster,
    releaseDate,
    voteAverage,
    voteCount,
  } = movieInfo;

  return (
    <div className={css.Details}>
    <Link  to={location.state.from}>
    <button className={css.Goback}>
 👈 Go back
 </button>
      </Link>
      <div className={css.Details1}>
       <div>
        <img className={css.Image}
          height='500px'
          src={poster ? `https://image.tmdb.org/t/p/w500/${poster}` : 'no image found'}
          alt={title}
        />
        </div>
       <div className={css.Details2}>
          <div>
            <h2  className={css.Name}>{title}</h2>
            <p>Release date: {releaseDate}</p>
          </div>
          <div>Genre:
          <ul  className={css.List}>

            {genres &&
              genres.map(({ name, id }) => (
                <li key={id}>{name}</li>
              ))}

          </ul>
          </div>
          <p>Description: {description}</p>
          <div>
            <p>
              Vote average: <span>{voteAverage}</span>
            </p>
            <p>
              Vote count: <span>{voteCount}</span>
            </p>
          </div>
         </div>
      </div>

      <p className={css.Add}>💡Additional Information</p>
        <ul  className={css.Inform}>
          <li>
          <NavLink className={css.Info} to="cast"  state={{ from: subLocation }}>
          ▶ Cast
            </NavLink>
          </li>
          <li>
          <NavLink className={css.Info} to="reviews"  state={{ from: subLocation }}>
          ▶ Reviews
            </NavLink>
          </li>
        </ul>

    </div>
  );
}

MovieInfo.propTypes = {
  movieInfo: propTypes.shape({
    title: propTypes.string,
    genres: propTypes.arrayOf(
      propTypes.shape({
        id: propTypes.number,
        name: propTypes.string,
      }),
    ),
    description: propTypes.string,
    poster: propTypes.string,
    releaseDate: propTypes.string,
    voteAverage: propTypes.number,
    voteCount: propTypes.number,
  }),
};


export default MovieInfo;