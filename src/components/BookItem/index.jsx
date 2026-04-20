import { FaRegStar, FaRegEye } from "react-icons/fa6";
import { MdOutlineFavoriteBorder, MdOutlineShuffle } from "react-icons/md";

import "./index.css";

const BookItem = () => {
  return (
    <article className="card">
      <img
        src="https://m.media-amazon.com/images/I/81tNnqcHxlL._AC_UF1000,1000_QL80_.jpg"
        className="book-img"
        alt="book_imgs"
      />
      <div className="card-text">
        <h1>Sharlock hOMES</h1>
        <h3>₹ 65</h3>
        <div>
          <FaRegStar />
          <FaRegStar />
        </div>
        <p className="card-para">
          Headline: Elementary, My Dear Reader: Dive into the World of Sherlock
          Holmes Step into the foggy streets of Victorian London with the
          world’s most famous consulting detective. Created by Sir Arthur Conan
          Doyle, Sherlock Holmes redefined literature with his unparalleled
          powers of observation, deductive reasoning, and bohemian eccentricity.
          Alongside his loyal biographer, Dr. John Watson, Holmes tackles
          baffling mysteries—from stolen treasures to chilling murders—that
          Scotland Yard cannot solve. Explore our curated collection of novels,
          short story anthologies, and definitive box sets, and discover why the
          game is still afoot over a century later.
        </p>
        <button>This button</button>
        <span>
          <div className="icons-bg">
            <MdOutlineFavoriteBorder />
          </div>
          <div className="icons-bg">
            <MdOutlineShuffle />
          </div>
          <div className="icons-bg">
            <FaRegEye />
          </div>
        </span>
      </div>
    </article>
  );
};

export default BookItem;
