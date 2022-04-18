import React from "react";
import "./BookCard.css";

const BookCard = ({ bookData }) => {
  const { coverId, title, authors, firstPublishYear } = bookData;

  const coverURL = coverId
    ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`
    : "https://openlibrary.org/images/icons/avatar_book-sm.png";

  const authorsText = authors
    ? authors.map((author, index) => {
        return (
          <span key={author}>
            {index !== 0 ? ", " : ""}
            {author}
          </span>
        );
      })
    : "No authors found";

  const firstPublishYearText = firstPublishYear || "-";

  return (
    <div className="book-card-container" data-testid="book-card-container">
      <img src={coverURL} alt={`${title} cover`} className="cover" />
      <div className="details">
        <h3>{title}</h3>
        <p>By: {authorsText}</p>
        <p className="published-date">
          First published in: {firstPublishYearText}
        </p>
      </div>
    </div>
  );
};

export default BookCard;
