import logo from '../img/logo.png';
import { NavLink } from 'react-router-dom';
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

  const API_KEY = 'c28047bc034a0694cbb166947b5e6731';
  return (
    <nav className="container mx-auto px-16 bg-[#151515]">
      <div className="flex justify-between items-center">
        <div className="w-24 h-24">
          <img src={logo} alt="" />
        </div>

        <div className="flex space-x-18 text-white text-3xl">
          {navigations.map((item) => {
            return (
              <NavLink key={item.name} to={item.href}>
                {item.name}
              </NavLink>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Header;
