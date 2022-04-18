import React from "react";
import renderer from "react-test-renderer";
import { cleanup } from "@testing-library/react";
import ResultsTable from "./ResultsTable";

const SAMPLE_RESULTS = [
  {
    index: 0,
    key: "/works/OL11816058M",
    coverId: 1001,
    title: "Test Book 1",
    authors: ["Jane Doe"],
    firstPublishYear: 2020,
  },
  {
    index: 1,
    key: "/works/6M113416058M",
    coverId: 1002,
    title: "Test Book 2",
    authors: ["John Doe"],
    firstPublishYear: 1950,
  },
  {
    index: 2,
    key: "/works/DH115676058M",
    coverId: 1003,
    title: "Test Book 3",
    authors: ["Bob Johnson"],
    firstPublishYear: 1900,
  },
];

afterEach(() => {
  cleanup();
});

describe("The results table", () => {
  it("renders as expected", () => {
    const resultsWhileLoading = renderer
      .create(<ResultsTable isLoading={true} results={[]} />)
      .toJSON();
    const resultsAfterLoading = renderer
      .create(<ResultsTable isLoading={false} results={SAMPLE_RESULTS} />)
      .toJSON();

    expect(resultsWhileLoading).toMatchSnapshot();
    expect(resultsAfterLoading).toMatchSnapshot();
  });
});
