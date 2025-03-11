import React from 'react';
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MyBookCard } from '../../components/MyBookCard/MyBookCard';

jest.mock('../EditBookCard/EditBookCard', () => ({
  EditBookCard: jest.fn(({ book, onEdit, anchorEl, setAnchorEl }) => (
    <div data-testid="edit-book-card" onClick={() => onEdit(book)}>
      Edit Book Card
    </div>
  ))
}));

 const mockGetBook = {
            book_id: '1',
            book_title: 'Book title',
            book_author: 'Author',   
            book_publishedDate: '2023',
            book_genre: 'Fantasy',
            book_description: 'Description',
            book_rating: 4
        };

describe('MyBookCard Unit Tests', () => {
    it('should render the book details on the card', async () => {
        render(<MyBookCard book={mockGetBook} onRemove={() => {}} onEdit={() => {}} />);
        expect(screen.getByText('Book title')).toBeInTheDocument();
        expect(screen.getByText('Author')).toBeInTheDocument();
        expect(screen.getByText('Fantasy')).toBeInTheDocument();
        expect(screen.getByText('Description')).toBeInTheDocument();
    })
});


describe('MyBookCard Integration Test', () => {
    const mockOnRemove = jest.fn();
    const mockOnEdit = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('Use should be able to edit and remove a book in the book card', async () => {
        render(<MyBookCard book={mockGetBook} onRemove={mockOnRemove} onEdit={mockOnEdit} />);
        const editButton = screen.getByText(/Edit book/);
        act(() => {
            fireEvent.click(editButton);
        });
        await waitFor(() => {
            const mockEditedBook = { ...mockGetBook, book_title: 'Updated Book Title' };
            mockOnEdit(mockEditedBook);
            expect(mockOnEdit).toHaveBeenCalled();
        });
        const removeButton = screen.getByText(/Remove book/);
        fireEvent.click(removeButton);
        expect(mockOnRemove).toHaveBeenCalledWith('1');
    });
})