import React from "react";
import { render, screen } from "@testing-library/react";
import { BookCount} from "./BookCount";

describe("BookCount Component Unit Test", () => {
  it("renders book count with correct count ", () => {
    render(<BookCount count={2} />);
    expect(screen.getByText("Book count: 2")).toBeInTheDocument();
  });
});
