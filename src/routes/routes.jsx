import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import TvShows from '../pages/TvShows';
import Movies from '../pages/Movies';
import Search from '../pages/Search';
import Home from '../pages/Home';
import MovieDetails from '../pages/MovieDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,

    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: 'tv',
        element: <TvShows></TvShows>,
      },
      {
        path: 'movie',
        element: <Movies></Movies>,
      },
      {
        path: 'search',
        element: <Search></Search>,
      },
      {
        path: 'detail',
        element: <MovieDetails></MovieDetails>,
      },
    ],
  },
]);

export default router;
