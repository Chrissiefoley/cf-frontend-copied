import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { AddBookCard } from "./AddBookCard.jsx";
import { getBooks } from "../../client.js";
import { MyBookList } from "./../../components/MyBookList/MyBookList.jsx";

jest.mock("../../client", () => ({
  postBook: jest.fn(),
  getBooks: jest.fn(),
}));

jest.mock("./../../components/MyBookList/MyBookList", () => ({
  MyBookList: () => <div data-testid="my-book-list">Mocked Book List</div>,
}));

describe("AddBookCard", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the AddBookCard component successfully", () => {
    render(
      <BrowserRouter>
        <AddBookCard />
      </BrowserRouter>
    );
    expect(
      screen.getByRole("textbox", { name: /book title/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("textbox", { name: /author name/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("textbox", { name: "Published date (yyyy)" })
    ).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: /genre/i })).toBeInTheDocument();
    expect(
      screen.getByRole("textbox", { name: /description/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/Rate the book/i)).toBeInTheDocument();
  });
});
