import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import ReactDOM from "react-dom";
import { SearchBar } from "./SearchBar";

describe("SearchBar", () => {
  it("Should render the search bar", () => {
    render(<SearchBar />);
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });
});
