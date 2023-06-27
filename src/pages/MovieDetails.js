import { useState, useEffect, lazy, Suspense } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import movieDetails from 'API/movieDetails';
import MovieInfo from 'components/MovieDetails/MobieDetails.jsx';

const Cast = lazy(() =>
  import('./Cast.js'),
);
const Reviews = lazy(() =>
  import('./Reviews.js'),
);

function MovieDetails() {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);

  useEffect(() => {
    movieDetails(movieId).then(
      ({
        original_title,
        genres,
        overview,
        poster_path,
        release_date,
        vote_average,
        vote_count,
      }) => {
        const movieInfo = {
          title: original_title,
          genres: genres,
          description: overview,
          poster: poster_path,
          releaseDate: release_date,
          voteAverage: vote_average,
          voteCount: vote_count,
        };

        return setMovieInfo(movieInfo);
      },
    );
  }, [movieId]);

  return (
    <>
      {movieInfo && <MovieInfo movieInfo={movieInfo} />}
      <Suspense>
        <Routes>
          <Route path="/cast" element={<Cast />} />
          <Route path="/reviews" element={<Reviews />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default MovieDetails;