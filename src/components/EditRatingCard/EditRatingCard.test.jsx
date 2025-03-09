import React from "react";
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AddBookCard } from './AddBookCard.jsx';
import { getBooks } from "../../client.js";

jest.mock("../../client.js", () => ({
    postBook: jest.fn()
}));

describe('AddBookCard', () => {
    it('renders the BookCard component successfully', () => {
        render(<AddBookCard />);
        expect(screen.getByRole('textbox', { name: /book title/i })).toBeInTheDocument();
        expect(screen.getByRole('textbox', { name: /author name/i })).toBeInTheDocument();
        expect(screen.getByRole('textbox', { name: /published date/i })).toBeInTheDocument();
        expect(screen.getByRole('textbox', { name: /genre/i })).toBeInTheDocument();
        expect(screen.getByRole('textbox', { name: /description/i })).toBeInTheDocument();
        expect(screen.getByText(/Rate the book/i)).toBeInTheDocument();    
    })
    // it('collects the correct information with user input', () => {
    //     render(<AddBookCard />);
    //     fireEvent.click(Button);
    //     expect
    // })
});