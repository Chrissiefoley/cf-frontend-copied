import React from "react";
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SearchBar } from './SearchBar.jsx';
import { getBooks } from "../../client.js";


jest.mock("../../client.js", () => ({
    getBooks: jest.fn().mockResolvedValue([]),
}))

jest.mock('./../../components/MyBookList/MyBookList.jsx', () => ({
  MyBookList: ({ filteredBooks, searchResult }) => (
    <div data-testid="mock-book-list">
      {filteredBooks ? 'Books have been filtered' : 'Book are not filtered'}
      {searchResult && searchResult.length > 0 ? 'Has search results' : 'Without search results'}
    </div>
  ),
}));

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

describe('SearchBar Unit Tests', () => {
    it('renders search bar and button', async () => {
        render(<SearchBar />);
        await waitFor(() => expect(getBooks).toHaveBeenCalled());
        expect(screen.getByPlaceholderText(/Search for a book/i)).toBeInTheDocument();
        expect(screen.getByRole("button", { name: /SELECT/i })).toBeInTheDocument();
})
    it('updates search bar content when user types', async () => {
        render(<SearchBar />);
        await waitFor(() => expect(getBooks).toHaveBeenCalled());
        const searchInputText = screen.getByPlaceholderText(/Search for a book/i);
        fireEvent.change(searchInputText, { target: { value: 'test'} });
        expect(searchInputText.value).toEqual('test');
    })
});

describe('SearchBar Integration Test', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    getBooks.mockResolvedValue(mockGetBooks);
  });

  test('integrates with MyBookList when displaying filtered books', async () => {
    render(<SearchBar />);
    
    await waitFor(() => expect(getBooks).toHaveBeenCalled());
    expect(screen.queryByText('My Book List')).not.toBeInTheDocument();
    expect(screen.queryByText(/search result/i)).not.toBeInTheDocument();
    expect(screen.getByText('SELECT')).toBeInTheDocument();
    expect(screen.getByTestId('result')).toBeInTheDocument();
  });
});
