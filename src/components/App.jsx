import {Routes, Route} from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Cast from 'pages/Cast';
import Reviews from 'pages/Reviews';

const Home = lazy(() =>
  import('../pages/Home'),
);

const Movies = lazy(() =>
  import('../pages/Movies'),
);

const MoviesDetails = lazy(() =>
  import('../pages/MovieDetails'),
);

function App() {
  return (
    <div>
    <Header/>
    <Suspense>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId/*" element={<MoviesDetails />}>
          {/* <Route path="cast" element={<Cast />}></Route>
          <Route path="reviews" element={<Reviews />}></Route> */}
        </Route>
        <Route path="*" element={<Home />} />
     </Routes>
     </Suspense>
     <Footer/>
    </div>
  );
};

export default App;