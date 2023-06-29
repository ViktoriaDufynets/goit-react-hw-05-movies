import {Routes, Route} from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Loader from './Loader/Loader';

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
    <Suspense  fallback={<Loader/>}>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId/*" element={<MoviesDetails />}>
        </Route>
        <Route path="*" element={<Home />} />
     </Routes>
     </Suspense>
     <Footer/>
    </div>
  );
};

export default App;