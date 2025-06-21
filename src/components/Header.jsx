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
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setActiveStatus((prev) => !prev);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (search) {
      navigate(`/search?q=${search}`);
    }
  }
  function handleSearch(e) {
    setSearch(e.target.value);
  }

  function gotoHome() {
    navigate('/');
  }
  return (
    <nav className="container m-0 md:mx-auto px-16 bg-[#151515]">
      <div className=" w-full h-24 flex flex-row items-center justify-between ">
        <div
          className="md:ml-0 -ml-12 mr-4 flex flex-row items-center   cursor-pointer "
          onClick={gotoHome}
        >
          <h1 className="text-xl md:text-3xl text-[#FFC107] font-bold">
            Streamly
          </h1>
        </div>

        <div className="flex flex-row  items-center space-x-5 md:space-x-7 text-white text-xl md:text-3xl hover:no-underline">
          <div className="flex space-x-12 flex-row">
            {navigations.map((item) => {
              return (
                <div key={item.name} className="hidden md:block">
                  <NavLink to={item.href}>{item.name}</NavLink>
                </div>
              );
            })}
          </div>
          <form
            className="flex flex-row justify-center"
            action=""
            onSubmit={(e) => handleSubmit(e)}
          >
            <input
              className={`${
                activeStatus ? 'block' : 'hidden'
              } md:placeholder:text-lg  placeholder:text-sm focus:outline-none text-xl`}
              type="text"
              placeholder="Search your movies...."
              onChange={(e) => handleSearch(e)}
            />
            <div className="flex justify-between items-center space-x-7">
              <div className="cursor-pointer" onClick={handleClick}>
                <IoIosSearch />
              </div>
              <button
                type="submit"
                className="focus:outline-none md:hidden block text-white bg-[#ffc107c6]  hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm  px-4 py-2  dark:focus:ring-yellow-900"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="md:hidden  flex space-x-12 justify-center flex-row text-white mb-8">
        {navigations.map((item) => {
          return (
            <div key={item.name}>
              <NavLink
                to={item.href}
                className={({ isActive }) =>
                  `px-4 py-2 rounded text-2xl hover:text-white ${
                    isActive ? 'bg-blue-500 text-white' : 'text-gray-300'
                  }`
                }
              >
                {item.name}
              </NavLink>
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default Header;
