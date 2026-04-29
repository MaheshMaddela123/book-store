//react
import { Link } from "react-router";

//icons
import { FaRegStar, FaRegEye } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { FaStarHalfStroke } from "react-icons/fa6";
import { MdOutlineFavoriteBorder, MdOutlineShuffle } from "react-icons/md";

//style
import "./index.css";

const BookItem = ({ bookObj }) => {
  const { title, price, rating, description, imageUrl, uniqueId } = bookObj;
  return (
    <li className="li-data">
      <Link className="link-data" to={"/books/" + uniqueId}>
        <article className="card">
          <img src={imageUrl} className="book-img" alt="book_imgs" />
          <div className="card-text">
            <h1>{title}</h1>
            <h3>₹ {price}</h3>
            <div className="star-cont">
              <FaStar className="star" />
              <FaStar className="star" />
              <FaStar className="star" />
              <FaStar className="star" />
              <FaStarHalfStroke className="star" />
            </div>
            <p className="card-para">{description}</p>
            <div className="button-icons-row">
              <button className="add-to-cart-btn">Add to Cart</button>
              <span className="icons-cont">
                <span className="icons-bg">
                  <MdOutlineFavoriteBorder className="icon" />
                </span>
                <span className="icons-bg">
                  <MdOutlineShuffle className="icon" />
                </span>
                <span className="icons-bg">
                  <FaRegEye className="icon" />
                </span>
              </span>
            </div>
          </div>
        </article>
      </Link>
    </li>
  );
};

export default BookItem;
