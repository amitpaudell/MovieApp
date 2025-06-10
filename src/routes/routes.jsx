import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import TvShows from '../pages/TvShows';
import Movies from '../pages/Movies';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,

    children: [
      {
        path: 'tv',
        element: <TvShows></TvShows>,
      },
      {
        path: 'movie',
        element: <Movies></Movies>,
      },
    ],
  },
]);

export default router;
