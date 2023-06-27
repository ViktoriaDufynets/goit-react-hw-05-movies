import { useState, useEffect } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import movieSearch from 'API/movieSearch';
import Searchbar from 'components/Searchbar/Searchbar';
import MoviesList from 'components/MovieList/MovieList';

function Movies() {
  const { search } = useLocation();
  const query = new URLSearchParams(search).get('query') ?? '';
  const [movies, setMovies] = useState(null);


  useEffect(() => {
    console.log(query);
    if (query !== '') {
      movieSearch(query).then(({ results }) => {
        const moviesArray = [];

        results.map(
          ({ id, original_title, poster_path, vote_average, vote_count }) => {
            const movie = {
              id,
              title: original_title,
              poster: poster_path,
              voteAverage: vote_average,
              voteCount: vote_count,
            };

            return moviesArray.push(movie);
          },
        );
        setMovies(moviesArray);
        if (results.length === 0) {
          alert('No videos matched your search. Try again with a different search')

        }
      });
    }

  }, [query]);

  return (
  <>
      <Searchbar />
      
      {movies && (
        

          <MoviesList movies={movies} />

      )}

</>
  );
}

export default Movies;