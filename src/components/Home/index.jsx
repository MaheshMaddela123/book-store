import { useNavigate } from "react-router";

import Header from "../Header";

import "./index.css";
const Home = () => {
  const navigate = useNavigate();

  const handleExploreMore = () => {
    navigate("/books");
  };

  return (
    <div className="home-bg">
      <Header />
      <div className="banner">
        <div className="banner-text">
          <h1>
            Expand your mind <br />
            Read A Book
          </h1>
          <p>
            Welcome to our bookstore — a thoughtfully curated space for readers
            who value knowledge, inspiration, and discovery. We offer a diverse
            collection of books ranging from timeless Whether you're a
            passionate reader, a student, or someone exploring new ideas, our
            bookstore is designed to meet your needs with carefully selected
            titles, reliable service, and a commitment to fostering a love for
            reading.
          </p>
          <button onClick={handleExploreMore}>Explore More</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
