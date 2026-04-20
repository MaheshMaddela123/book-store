import BookItem from "../BookItem";
import Header from "../Header";

import "./index.css";

const BookList = () => {
  return (
    <div>
      <Header />
      <input type="search" />
      <ul className="book-list">
        <li className="book-info">
          <BookItem />
        </li>
        <li className="book-info">
          <BookItem />
        </li>
      </ul>
    </div>
  );
};

export default BookList;
