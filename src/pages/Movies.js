import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import movieSearch from 'API/movieSearch';
import Searchbar from 'components/Searchbar/Searchbar';
import MoviesList from 'components/MovieList/MovieList';

function Movies() {
  const { search } = useLocation();
  const query = new URLSearchParams(search).get('query') ?? '';
  const [movies, setMovies] = useState(null);


  useEffect(() => {
    if (query === '') {
      return;
    }
    if (query !== '') {
      movieSearch(query).then(({ results }) => {
        const moviesArray = results.map(({ id, original_title, poster_path, vote_average, vote_count }) => ({
              id,
              title: original_title,
              poster: poster_path,
              voteAverage: vote_average,
              voteCount: vote_count,
            }));
        setMovies(moviesArray);
        if (results.length === 0) {
          alert('No videos matched your search. Try again with a different search')
        }
      }).catch(error => {(console.log('No movies'))});
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