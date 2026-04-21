//react
import { useState, useEffect, use } from "react";
import { Triangle } from "react-loader-spinner";
import { IoIosSearch } from "react-icons/io";

//components
import BookItem from "../BookItem";
import Header from "../Header";

//style
import "./index.css";

const BookList = () => {
  const [booksList, setBooksList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    const getBooksList = async () => {
      const apiUrl = "https://www.jsonkeeper.com/b/4VO6W";
      const response = await fetch(apiUrl);
      const data = await response.json();
      setBooksList(data);
      setIsLoading(false);
    };
    getBooksList();
  }, []);

  const renderLoader = () => {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Triangle color="#ffe6a7" />
        <h1 style={{ color: "#bb9457" }}>Loading....</h1>
      </div>
    );
  };

  const renderBooksList = () => {
    return (
      <ul className="book-list">
        {filteredBooks.map((each) => (
          <BookItem bookObj={each} key={each.uniqueId} />
        ))}
      </ul>
    );
  };

  const onChangeSearchInput = (event) => {
    setUserInput(event.target.value);
  };

  const filteredBooks = booksList.filter((eachObj) =>
    eachObj.title.toLowerCase().includes(userInput.toLowerCase()),
  );

  return (
    <div>
      <Header />
      <div className="search-input-cont">
        <input
          type="search"
          placeholder="Search book...."
          className="search-input"
          id="searchInput"
          onChange={onChangeSearchInput}
          value={userInput}
        />
        <button className="search-btn">
          <IoIosSearch />
        </button>
      </div>
      {isLoading ? renderLoader() : renderBooksList()}
    </div>
  );
};

export default BookList;
