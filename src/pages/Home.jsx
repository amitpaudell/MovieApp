import ImageGallery from 'react-image-gallery';
import { useState, useEffect } from 'react';
import 'react-image-gallery/styles/css/image-gallery.css';

const Home = () => {
  const API_KEY = 'c28047bc034a0694cbb166947b5e6731';
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(false);
  //   https://image.tmdb.org/t/p/w500${movie.poster_path}
  //   https://image.tmdb.org/t/p/original/wnnu8htEZBLtwrke9QYfLKx6zjp.jpg
  const fetchMovies = async () => {
    const res = await fetch(`
          https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);

    const result = await res.json();
    setMovies(result.results);

    setLoading(true);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const images = [];
  movies.slice(0, 5).map((movie) => {
    images.push({
      original: `https://image.tmdb.org/t/p/original${movie.backdrop_path}`,
      thumbnail: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
    });
  });

  return <div>{isLoading && <ImageGallery items={images} />}</div>;
};

export default Home;
