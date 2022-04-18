import React from "react";
import renderer from "react-test-renderer";
import { render, screen, cleanup } from "@testing-library/react";
import App from "./App";

afterEach(() => {
  cleanup();
});

describe("The root app", () => {
  it("renders as expected", () => {
    const tree = renderer.create(<App />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders all items", () => {
    render(<App />);
    const headerElement = screen.getByTestId("header");
    expect(headerElement).toBeInTheDocument();

    // Test if title rendered
    expect(screen.getByRole("heading")).toHaveTextContent("FindMeBooks");
    // Test if logo rendered
    expect(screen.getByTestId("app-logo")).toBeInTheDocument();
    // Test if search bar rendered
    expect(screen.getByTestId("search-bar-input")).toBeInTheDocument();
    // Test if search button rendered
    expect(screen.getByTestId("search-bar-button")).toHaveTextContent("GO");
  });
});
