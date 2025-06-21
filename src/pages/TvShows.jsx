import { useState, useEffect } from 'react';
import TvCard from '../components/TvCard';
import { useNavigate } from 'react-router-dom';

const TvShows = () => {
  const API_KEY = 'c28047bc034a0694cbb166947b5e6731';
  const [tvshows, setTvshows] = useState();
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();

  const fetchTvshows = async () => {
    const res = await fetch(`
    https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}`);

    const result = await res.json();
    setTvshows(result.results);

    setLoading(true);
  };
  function handleDetail(id, source) {
    navigate(`/detail?q=${id}&source=${source}`);
  }

  useEffect(() => {
    fetchTvshows();
  }, []);

  return (
    <div>
      <h1 className="text-white text-3xl md:text-4xl font-bold mx-8 mt-8">
        Top Popular TV Shows
      </h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {isLoading &&
          tvshows.map((tv) => {
            return (
              <div key={tv.id} onClick={() => handleDetail(tv.id, 'tv')}>
                <TvCard tv={tv}></TvCard>;
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default TvShows;
