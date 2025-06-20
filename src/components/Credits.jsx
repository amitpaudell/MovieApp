import { useState, useEffect } from 'react';
const Credits = ({ movieid, source }) => {
  const [casts, setCast] = useState([]);
  const API_KEY = 'c28047bc034a0694cbb166947b5e6731';

  const [isLoading, setLoading] = useState(false);

  const fetchMovies = async () => {
    const res = await fetch(`
    https://api.themoviedb.org/3/${source}/${movieid}/credits?api_key=${API_KEY}`);

    const result = await res.json();

    setCast(result.cast || []);

    setLoading(true);
  };

  useEffect(() => {
    if (movieid) {
      fetchMovies();
    }
  }, [movieid]);
  return (
    <div>
      {isLoading && (
        <div className="flex flex-row space-x-10">
          {casts.slice(0, 4).map((cast) => {
            return (
              <div key={cast.id}>
                <div className="w-20 md:max-w-30">
                  <img
                    src={
                      cast.profile_path
                        ? `https://image.tmdb.org/t/p/w500${cast.profile_path}`
                        : '/fallback-profile.png' // You can use a local fallback image
                    }
                    alt={cast.name}
                    className="rounded-md"
                  />
                </div>
                <h3 className="max-w-25">{cast.name}</h3>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Credits;
