import { useState, useEffect } from 'react';
import trending from 'API/movieTrending';
import MoviesList from 'components/MovieList/MovieList';
import css from './Home.module.css';

function Home() {
    const [movies, setMovies] = useState(null);

    useEffect(() => {
  
        trending().then(({ results }) => {
            const moviesArray = results.map(({ id, original_title, poster_path, vote_average, vote_count }) => ({
                    id,
                    title: original_title,
                    poster: poster_path,
                    voteaverage: Math.ceil(vote_average * 10),
                    votecount: vote_count,
                  }));        
              setMovies(moviesArray);
        }).catch(error => {(console.log('ERRORA'))})
    }, []);

    return (
        movies && (
          <div>
              <h2 className={css.Tranding}>Tranding Today</h2>
            <MoviesList movies={movies} />
          </div>
        )
      );
}

export default Home;