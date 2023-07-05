import logo from "../../helpers/logo.png";
import "./Navbar.scss";
const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <img src={logo} alt="horoscope" />
      </div>
      <div className="links">
        <a href="#horoskop">Horoskop</a>
        <a href="#daily">Daily</a>
        <a href="#Tarot">Tarot</a>
        <a href="#article">Article</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
};
export default Navbar;
