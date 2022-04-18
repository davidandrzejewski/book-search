import React, { useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
import BookCard from "./BookCard";
import "./ResultsTable.css";

const sortByConfig = [
  {
    value: { key: "title", direction: "asc" },
    title: "Title (A-Z)",
  },
  {
    value: { key: "title", direction: "desc" },
    title: "Title (Z-A)",
  },
  {
    value: { key: "firstPublishYear", direction: "asc" },
    title: "Published Date (oldest-newest)",
  },
  {
    value: { key: "firstPublishYear", direction: "desc" },
    title: "Published Date (newest-oldest)",
  },
];

const SortByButton = ({ sortBy, value, title, handleClickSortBy }) => {
  return (
    <button
      className={`sort-button ${sortBy === value ? "selected" : ""}`}
      onClick={() => handleClickSortBy(value)}
    >
      {title}
    </button>
  );
};

const ResultsTable = ({ results, isLoading }) => {
  const [sortBy, setSortBy] = useState(null);

  // the function below sorts the results array based on the sortBy key and direction
  const sortedResults = sortBy
    ? results.sort((a, b) => {
        if (a[sortBy.key] <= b[sortBy.key]) {
          return sortBy.direction == "asc" ? -1 : 1;
        } else {
          return sortBy.direction == "asc" ? 1 : -1;
        }
      })
    : results.sort((a, b) => a.index - b.index);

  const handleClickSortBy = (value) => {
    if (value === sortBy) {
      setSortBy(null);
    } else {
      setSortBy(value);
    }
  };

  return (
    <div>
      {isLoading ? (
        <LoadingSpinner />
      ) : results.length ? (
        <div>
          <div className="sort-buttons-container">
            <span>Sort By: </span>
            <ul>
              {sortByConfig.map((sortByButton) => {
                return (
                  <li
                    key={sortByButton.value.key + sortByButton.value.direction}
                  >
                    <SortByButton
                      key={
                        sortByButton.value.key + sortByButton.value.direction
                      }
                      sortBy={sortBy}
                      value={sortByButton.value}
                      title={sortByButton.title}
                      handleClickSortBy={handleClickSortBy}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
          <ul>
            {sortedResults.map((bookData) => {
              return (
                <li key={bookData.key}>
                  <BookCard bookData={bookData} />
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default ResultsTable;
