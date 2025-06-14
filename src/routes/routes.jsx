import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import TvShows from '../pages/TvShows';
import Movies from '../pages/Movies';
import Search from '../pages/Search';
import Home from '../pages/Home';

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
    ],
  },
]);

export default router;
