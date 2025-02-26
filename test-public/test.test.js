import { render, screen } from "@testing-library/react";
// import "@testing-library/jest-dom";
import { App } from "./test.js";
import React from "react";

test("renders Personal Book Library title", () => {
  render(<App />);
  const title = screen.getByText(/Personal Book Library/i);
  expect(title).toBeInTheDocument();
});
