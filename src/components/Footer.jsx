import poster from '../img/poster.jpg';

const Footer = () => {
  return (
    <div
      style={{ backgroundImage: `url(${poster})` }}
      className="relative mt-4 flex flex-col items-center justify-between p-12 bg-cover bg-center"
    >
      <div className="absolute inset-0 bg-black opacity-75"></div>
      <div className="relative z-10 text-2xl md:text-3xl">
        <h1 className="text-white  font-bold">Streamly</h1>
      </div>

      <div className="flex  md:text-xl relative z-10 flex-row space-x-24 mt-6 text-white">
        <div className="flex flex-col space-y-4">
          <a href="#">Home</a>
          <a href="#">Contact Us</a>
          <a href="#">Terms of Services</a>
          <a href="#">About Us</a>
        </div>
        <div className="flex flex-col space-y-4">
          <a href="#">Live</a>
          <a href="#">FAQ</a>
          <a href="#">Premium</a>
          <a href="#">Privacy Policy</a>
        </div>
        <div className="flex flex-col space-y-4">
          <a href="">You Must Watch</a>
          <a href="">Recent Releases</a>
          <a href="">Top IMDB</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
