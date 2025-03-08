import React from "react";
import { render, screen, fireEvent } from '@testing-library/react';
import { BookCount } from './BookCount.jsx';
import { waitFor } from '@testing-library/dom'; 
import { getBooks } from "../../client.js";
import '@testing-library/jest-dom';

const mockGetBooks = [
    {
        book_title: "test",
    book_author: "test",
        book_publishedDate: "1010-01-01",
    book_genre: "Fantasy",
    book_description: "test",
    },
    {
        book_title: "test2",
        book_author: "test2",
        book_publishedDate: "1010-02-02",
        book_genre: "Romance",
        book_description: "test",
    }
];

jest.mock("../../client.js", () => ({
    getBooks: jest.fn()
}))

beforeEach(() => {
    getBooks.mockClear();
});

describe ('BookCount', () => {
    it('renders book count', async () => {
        getBooks.mockResolvedValue(mockGetBooks);
        render(<BookCount />);
        await waitFor(() => {
 expect(screen.getByText("Book count: 2").toBeInTheDocument());
        })
  })
});