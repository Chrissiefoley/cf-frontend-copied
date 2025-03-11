import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Sorting } from '../Sorting/Sorting.jsx';
import '@testing-library/jest-dom';

const mockGetBooks = [
  { book_title: 'Are we there yet', book_author: 'John Doe' },
  { book_title: 'Lord of the Flies', book_author: 'Ted Baker' },
  { book_title: 'The Girls Club', book_author: 'Aaron Smith' }
];

const mockOnSort = jest.fn();

describe('Sorting Component Unit Tests', () => {
  test('Should render the sort by/ order by box dropdown and button', () => {
    render(<Sorting books={mockGetBooks} onSort={() => {}} />);

    expect(screen.getByLabelText(/sort by/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/order by/i)).toBeInTheDocument();
    expect(screen.getByText(/submit/i)).toBeInTheDocument();
  });

  test('when submit is clicked the onSort function is called and books are sorted by Author a-z', () => {
    render(<Sorting books={mockGetBooks} onSort={mockOnSort} />);

    fireEvent.mouseDown(screen.getByLabelText(/sort by/i));
    fireEvent.click(screen.getByText(/author/i));
    fireEvent.mouseDown(screen.getByLabelText(/order by/i));
    fireEvent.click(screen.getByText('A-Z'));
    fireEvent.click(screen.getByText(/submit/i));
    expect(mockOnSort).toHaveBeenCalled();
    const sortedBooks = mockOnSort.mock.calls[0][0];
    expect(sortedBooks[0].book_author).toBe('Aaron Smith');
  });
});