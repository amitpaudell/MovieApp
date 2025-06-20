import { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';
import { useNavigate } from 'react-router-dom';

const Movies = () => {
  const API_KEY = 'c28047bc034a0694cbb166947b5e6731';
  const [movies, setMovies] = useState();
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();

  const fetchMovies = async () => {
    const res = await fetch(`
    https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);

    const result = await res.json();
    setMovies(result.results);

    setLoading(true);
  };

  function handleDetail(id) {
    navigate(`/detail?q=${id}`);
  }
  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div>
      <h1 className="text-white text-3xl md:text-4xl font-bold mx-8 mt-8">
        Top Popular Movies
      </h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {isLoading &&
          movies.map((movie) => {
            return (
              <div key={movie.id} onClick={() => handleDetail(movie.id)}>
                <MovieCard movie={movie}></MovieCard>;
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Movies;
