const TvCard = ({ tv }) => {
  return (
    <div className="relative  m-8 group ">
      <div className="w-70 h-full relative ">
        <img
          className="rounded-md w-full h-full object-cover brightness-75"
          src={`https://image.tmdb.org/t/p/w500${tv.poster_path}`}
          alt=""
        />
      </div>

      {/* Movie Short Description */}

      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 absolute bottom-0 text-white w-70 bg-gradient-to-t from-black/100 to-black/70">
        <h1 className="font-bold text-2xl w-full text-yellow-400">
          {tv.original_name}
        </h1>
        <div className="flex justify-between text-yellow-500 font-semibold">
          <h3 className="">{tv.first_air_date}</h3>
          <p>{Math.round(tv.vote_average)}</p>
        </div>

        <p className="text-left">{tv.overview.slice(0, 100) + '...'}</p>
      </div>
    </div>
  );
};

export default TvCard;
