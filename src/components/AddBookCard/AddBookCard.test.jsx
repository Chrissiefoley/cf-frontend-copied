import React from "react";
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AddBookCard } from './AddBookCard.jsx';
import { getBooks } from "../../client.js";
import { MyBookList } from './../../components/MyBookList/MyBookList.jsx';

jest.mock('../../client', () => ({
  postBook: jest.fn(),
  getBooks: jest.fn()
}));

jest.mock('./../../components/MyBookList/MyBookList', () => ({
  MyBookList: () => <div data-testid="my-book-list">Mocked Book List</div>
}));

describe('AddBookCard', () => {
    beforeEach(() => {
    jest.clearAllMocks();
  });
    it('renders the AddBookCard component successfully', () => {
        render(<AddBookCard />);
        expect(screen.getByRole('textbox', { name: /book title/i })).toBeInTheDocument();
        expect(screen.getByRole('textbox', { name: /author name/i })).toBeInTheDocument();
        expect(screen.getByRole('textbox', { name: /published date/i })).toBeInTheDocument();
        expect(screen.getByRole('textbox', { name: /genre/i })).toBeInTheDocument();
        expect(screen.getByRole('textbox', { name: /description/i })).toBeInTheDocument();
        expect(screen.getByText(/Rate the book/i)).toBeInTheDocument();    
    })
});

  it('user can enter book details', async () => {
    render(<AddBookCard />);
    
    await userEvent.type(screen.getByPlaceholderText('Book title'), 'Title test');
    await userEvent.type(screen.getByPlaceholderText('Author name'), 'Author test');
    await userEvent.type(screen.getByPlaceholderText('Published date'), '2023');
    await userEvent.type(screen.getByPlaceholderText('Genre'), 'Fiction test');
    await userEvent.type(screen.getByPlaceholderText('Description'), 'Description test');
    
    expect(screen.getByPlaceholderText('Book title')).toHaveValue('Title test');
    expect(screen.getByPlaceholderText('Author name')).toHaveValue('Author test');
    expect(screen.getByPlaceholderText('Published date')).toHaveValue('2023');
    expect(screen.getByPlaceholderText('Genre')).toHaveValue('Fiction test');
    expect(screen.getByPlaceholderText('Description')).toHaveValue('Description test');
  });
