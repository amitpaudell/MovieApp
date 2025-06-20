import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import SearchCard from '../components/SearchCard';

const Search = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q') || '';
  console.log(query);

  const [movies, setMovies] = useState(null);
  const API_KEY = 'c28047bc034a0694cbb166947b5e6731';

  const [isLoading, setLoading] = useState(false);

  const fetchMovies = async () => {
    const res = await fetch(`
    https://api.themoviedb.org/3/search/multi?query=${query}&api_key=${API_KEY}`);

    const result = await res.json();
    setMovies(result.results || []);

    setLoading(true);
  };

  useEffect(() => {
    fetchMovies();
  }, [query]);
  return (
    <div>
      <h1 className="text-white text-3xl md:text-4xl font-bold mx-8 mt-8">
        Top Popular Movies
      </h1>

      <div className=" grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {isLoading &&
          movies.length > 0 &&
          movies.map((smovie) => {
            return <SearchCard key={smovie.id} smovie={smovie}></SearchCard>;
          })}
      </div>
    </div>
  );
};

export default Search;
