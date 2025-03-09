import React from "react";
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { SearchBar } from './SearchBar.jsx';
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

describe('SearchBar', () => {
    it('renders search bar and button', () => {
        render(<SearchBar />);
        expect(screen.getByPlaceholderText(/Search for a book/i)).toBeInTheDocument();
        expect(screen.getByRole("button", { name: /Search/i })).toBeInTheDocument();
        })
    it('updates search bar content when user types', () => {
        render(<SearchBar />);
        const searchInputText = screen.getByRole('textbox', { name: /Search for a book/i });
        // console.log(searchInputText);
        fireEvent.change(searchInputText, { target: { value: 'test'} });
        expect(searchInputText).toEqual('test');
    })
});