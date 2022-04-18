import React from "react";
import renderer from "react-test-renderer";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import SearchBar from "./SearchBar";

afterEach(() => {
  cleanup();
});

describe("The search bar", () => {
  it("renders as expected", () => {
    const tree = renderer.create(<SearchBar />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("changes text", () => {
    render(<SearchBar />);

    const searchInput = screen.getByTestId("search-bar-input");

    fireEvent.change(searchInput, {
      target: {
        value: "Lord of the rings",
      },
    });

    expect(searchInput).toHaveValue("Lord of the rings");
  });
});
