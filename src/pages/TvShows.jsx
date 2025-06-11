import { useState, useEffect } from 'react';
import TvCard from '../components/TvCard';

const TvShows = () => {
  const API_KEY = 'c28047bc034a0694cbb166947b5e6731';
  const [tvshows, setTvshows] = useState();
  const [isLoading, setLoading] = useState(false);

  const fetchTvshows = async () => {
    const res = await fetch(`
    https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}`);

    const result = await res.json();
    setTvshows(result.results);

    setLoading(true);
  };

  useEffect(() => {
    fetchTvshows();
  }, []);

  return (
    <div>
      <h1 className="text-white text-5xl font-bold mx-8 mt-8">
        Top Popular TV Shows
      </h1>
      <div className="grid grid-cols-4">
        {isLoading &&
          tvshows.map((tv) => {
            return <TvCard key={tv.id} tv={tv}></TvCard>;
          })}
      </div>
    </div>
  );
};

export default TvShows;
