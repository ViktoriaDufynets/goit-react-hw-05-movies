import css from './Actors.module.css';
import propTypes from 'prop-types';

function ActorsList({ actors }) {

    return (
        <ul className={css.Actors}>
          {actors.map(({ id, name, photo }) => {
            return (
                <li key={id}>
              <div>
                <img height='300px'
                  src={
                    photo ? `https://image.tmdb.org/t/p/w500/${photo}` : 'No actor found'
                  }
                  alt={name}
                />
              </div>
              <p  className={css.Actorsname}>{name}</p>
            </li>
            );
          })}
        </ul>
    );
  }
  
  ActorsList.propTypes = {
    actors: propTypes.arrayOf(
      propTypes.shape({
        id: propTypes.number,
        name: propTypes.string,
        photo: propTypes.string,
      }),
    ).isRequired,
  };

  export default ActorsList;