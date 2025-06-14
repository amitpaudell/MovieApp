const SearchCard = ({ smovie }) => {
  return (
    <div className="relative  m-8 group ">
      <div className="w-70 h-full relative ">
        <img
          className="rounded-md w-full h-full object-cover brightness-75"
          src={`https://image.tmdb.org/t/p/w500${smovie.poster_path}`}
          alt=""
        />
      </div>

      {/* Movie Short Description */}

      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 absolute bottom-0 text-white w-70 bg-gradient-to-t from-black/100 to-black/70">
        <h1 className="font-bold text-2xl w-full text-yellow-400">
          {smovie.original_title || smovie.original_name}
        </h1>
        <div className="flex justify-between text-yellow-500 font-semibold">
          <h3 className="">{smovie.release_date || smovie.first_air_date}</h3>
          <p>{Math.round(smovie.vote_average)}</p>
        </div>

        <p className="text-left">
          {smovie.overview
            ? smovie.overview.slice(0, 100) + '...'
            : 'No description available'}
        </p>
      </div>
    </div>
  );
};

export default SearchCard;
