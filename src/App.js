import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import SearchBar from "./components/SearchBar";
import ResultsTable from "./components/ResultsTable";

const App = () => {
  const [results, setResults] = useState([]);
  const [isLoadingResults, setIsLoadingResults] = useState(false);

  const onSubmitForm = async (searchTerms) => {
    // Turn on the loading spinner in the results table
    setIsLoadingResults(true);

    // request the data from openlibrary.org about the books related to "searchTerms"
    const response = await fetch(
      `http://openlibrary.org/search.json?q=${encodeURIComponent(searchTerms)}`
    );

    // Fetch the json from the response
    const apiResults = await response.json();

    // set only the relevant data into the state
    setResults(
      apiResults.docs.map((book, index) => {
        return {
          index,
          key: book.key,
          coverId: book.cover_i,
          title: book.title,
          authors: book.author_name,
          firstPublishYear: book.first_publish_year,
        };
      })
    );

    // Turn off the loading spinner in the results table
    setIsLoadingResults(false);
  };

  return (
    <div className="App">
      <header className="app-header" data-testid="header">
        <img
          src={logo}
          className="app-logo"
          alt="logo"
          data-testid="app-logo"
        />
        <div className="app-title">
          <h1>FindMeBooks</h1>
          <p>A simple book search web application</p>
        </div>
      </header>
      <SearchBar onSubmitForm={onSubmitForm} />
      <ResultsTable isLoading={isLoadingResults} results={results} />
    </div>
  );
};

export default App;
