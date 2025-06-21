import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Credits from '../components/Credits';
const MovieDetails = () => {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);

  const query = queryParams.get('q'); // The ID or search term
  const source = queryParams.get('source');

  const [movies, setMovies] = useState(null);
  const API_KEY = 'c28047bc034a0694cbb166947b5e6731';

  const [isLoading, setLoading] = useState(false);

  const fetchMovies = async () => {
    const res = await fetch(`
      https://api.themoviedb.org/3/${source}/${query}?api_key=${API_KEY}&language=en-US`);

    const result = await res.json();
    setMovies(result);

    setLoading(true);
  };

  useEffect(() => {
    fetchMovies();
  }, [query]);
  return (
    <div className="mt-8">
      {isLoading && (
        <div className="container mx-auto px-8 flex flex-col justify-center flex-wrap md:flex-nowrap space-y-12 md:flex-row md:p-24 text-white md:justify-between items-center space-x-20">
          <div className=" max-w-sm md:max-w-full ">
            <img
              className="rounded-md  object-cover brightness-75"
              src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`}
              alt=""
            />
          </div>

          {/* Description */}
          <div className="flex flex-col space-y-12  md:w-full">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold ">
                {movies.original_title || movies.original_name}
              </h1>
            </div>
            <div className="grid grid-cols-2 space-y-4 md:flex md:flex-row space-x-5.5">
              {movies?.genres?.map((genre) => {
                return (
                  <div
                    key={genre.id || genre.name}
                    className="md:w-40  border rounded-full text-center self-baseline py-2"
                  >
                    {genre.name}
                  </div>
                );
              })}
            </div>
            <div className="md:w-[80%]">
              <p>{movies.overview}</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">Top Casts</h3>
              <Credits source={source} key={query} movieid={query}></Credits>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
