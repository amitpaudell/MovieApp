import { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';

const Movies = () => {
  const API_KEY = 'c28047bc034a0694cbb166947b5e6731';
  const [movies, setMovies] = useState();
  const [isLoading, setLoading] = useState(false);

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

  return (
    <div>
      <h1 className="text-white text-5xl font-bold mx-8 mt-8">
        Top Popular Movies
      </h1>
      <div className="grid grid-cols-4">
        {isLoading &&
          movies.map((movie) => {
            return <MovieCard key={movie.id} movie={movie}></MovieCard>;
          })}
      </div>
    </div>
  );
};

export default Movies;
