import { Link } from "react-router";

import Logo from "../../assets/logo.png";

import { FaCartShopping } from "react-icons/fa6";
import { MdOutlineFavoriteBorder } from "react-icons/md";

import "./index.css";

const Header = () => {
  return (
    <>
      <header>
        <nav>
          <div className="logo-container">
            <img src={Logo} alt="bookle_img" />
            <p className="logo-text">Bookle</p>
          </div>
          <ul className="nav-links">
            <li>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/books" className="nav-link">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/cart" className="nav-link">
                Cart
              </Link>
            </li>
          </ul>
          <div className="icons-container">
            <div className="icon-bg">
              <FaCartShopping />
            </div>
            <div className="icon-bg">
              <MdOutlineFavoriteBorder />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
