import React from "react";
import renderer from "react-test-renderer";
import { cleanup } from "@testing-library/react";
import BookCard from "./BookCard";

const SAMPLE_BOOK = {
  index: 0,
  coverId: 12345,
  title: "Test Book",
  authors: ["Jane Doe"],
  firstPublishYear: 2020,
};

afterEach(() => {
  cleanup();
});

describe("The book details card", () => {
  it("renders as expected", () => {
    const tree = renderer.create(<BookCard bookData={SAMPLE_BOOK} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
