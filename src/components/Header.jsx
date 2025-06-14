import logo from '../img/logo.png';
import { NavLink } from 'react-router-dom';
import { IoIosSearch } from 'react-icons/io';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Header = () => {
  const navigations = [
    {
      name: 'Tv shows',
      href: 'tv',
    },
    {
      name: 'Movies',
      href: 'movie',
    },
  ];

  const [activeStatus, setActiveStatus] = useState(false);

  const API_KEY = 'c28047bc034a0694cbb166947b5e6731';
  const navigate = useNavigate();
  const [search, setSearch] = useState(null);

  function handleClick() {
    setActiveStatus((prev) => !prev);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (search) {
      navigate(`/search?q=${search}`);
    }
  }

  function gotoHome() {
    navigate('/');
  }
  return (
    <nav className="container mx-auto px-16 bg-[#151515]">
      <div className="flex justify-between items-center">
        <div className="w-24 h-24 mt-6 cursor-pointer " onClick={gotoHome}>
          <h1 className=" text-3xl text-[#FFC107] font-bold">Streamly</h1>
        </div>

        <div className="flex space-x-18 text-white text-3xl hover:no-underline">
          {navigations.map((item) => {
            return (
              <NavLink key={item.name} to={item.href}>
                {item.name}
              </NavLink>
            );
          })}
          <form action="" onSubmit={(e) => handleSubmit(e)}>
            <input
              className={`${
                activeStatus ? 'block' : 'hidden'
              } placeholder:text-lg focus:outline-none text-xl`}
              type="text"
              placeholder="Search your movies...."
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>
          <div className="cursor-pointer" onClick={handleClick}>
            <IoIosSearch />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
