import React from "react";
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BookCount } from './BookCount.jsx';
import { getBooks } from "../../client.js";

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

describe('BookCount', () => {
    it('renders book count', async () => {
        getBooks.mockResolvedValue(mockGetBooks);
        render(<BookCount />);
        await waitFor(() => {
            expect(screen.getByText("Book count: 2")).toBeInTheDocument();
        })
    })

    it('should render Book count: 0 if no books able to be retrieved', async () => {
        getBooks.mockResolvedValue([]);
        render(<BookCount />);
        await waitFor(() => {
            expect(screen.getByText("Book count: 0")).toBeInTheDocument();
        })
    })

    // it('throws error if getBooks failed to retrieve book count', async () => {
    //     getBooks.mockRejectedValue(new Error(`Couldn't fetch book count`));
    //     render(<BookCount />);
    //     await waitFor(() => {
    //         expect(screen.getByText("Error: Couldn't fetch book count").toBeInTheDocument());
    //     })
    // })
});