import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { FaStar } from "react-icons/fa";
import { FaStarHalfStroke } from "react-icons/fa6";
import { MdOutlineFavoriteBorder, MdOutlineShuffle } from "react-icons/md";
import { FaRegStar, FaRegEye } from "react-icons/fa6";

import Header from "../Header";
import "./index.css";

const BookDetails = () => {
  const [bookDetails, setBookDetails] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getBookDetails = async () => {
      try {
        const apiUrl = `https://www.jsonkeeper.com/b/4VO6W`;
        const response = await fetch(apiUrl);
        const data = await response.json();

        const book = data.find((each) => String(each.uniqueId) === String(id));
        setBookDetails(book);
      } catch (error) {
        console.error("Error fetching book data:", error);
      }
    };
    getBookDetails();
  }, [id]);

  const { title, price, rating, description, imageUrl, uniqueId } = bookDetails;

  return (
    <>
      <Header />
      <main className="book-details-container">
        <section className="bd-img-container">
          <img src={imageUrl} alt={title} className="bd-book-image" />
        </section>

        <section className="bd-text-container">
          <h1>{title}</h1>
          <div className="star-cont">
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStarHalfStroke className="star" />
          </div>
          <p>{description}</p>
          <h3 className="price-head">₹ {price}</h3>
          <div className="btn-icons-data">
            <button className="btn-add-to-cart">Add to Cart</button>
            <div className="icons-cont">
              <span className="icons-bg">
                <MdOutlineFavoriteBorder className="icon" />
              </span>
              <span className="icons-bg">
                <MdOutlineShuffle className="icon" />
              </span>
              <span className="icons-bg">
                <FaRegEye className="icon" />
              </span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default BookDetails;
