import ImageGallery from 'react-image-gallery';
import { useState, useEffect } from 'react';
import 'react-image-gallery/styles/css/image-gallery.css';

const Home = () => {
  const API_KEY = 'c28047bc034a0694cbb166947b5e6731';
  const [movies, setMovies] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
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

  const images = movies.slice(0, 5).map((movie) => ({
    original: `https://image.tmdb.org/t/p/original${movie.backdrop_path}`,
    thumbnail: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
  }));

  const texts = movies.slice(0, 5).map((movie) => ({
    movieName: movie.original_title,
    releaseDate: movie.release_date,
    description: movie.overview.slice(0, 200),
  }));

  return (
    isLoading && (
      <div className="relative mx-auto max-w-6xl">
        <div className="absolute bottom-14 md:bottom-24 left-4 z-10 bg-black/60 text-white px-4 py-2 rounded-md text-lg">
          <h1 className="font-bold text-3xl md:text-5xl w-full text-yellow-400">
            {texts[currentIndex].movieName}
          </h1>
          <h3 className="flex justify-between text-white md:text-yellow-500 font-semibold">
            {texts[currentIndex].releaseDate}
          </h3>
          <p className="hidden md:block">
            {texts[currentIndex].description}....
          </p>
        </div>
        <ImageGallery
          items={images}
          autoPlay={true}
          slideInterval={3000}
          showPlayButton={false}
          onSlide={(index) => setCurrentIndex(index)}
          showFullscreenButton={false}
        />
      </div>
    )
  );
};

export default Home;
