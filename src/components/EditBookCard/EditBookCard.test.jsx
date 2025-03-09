import React from "react";
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { EditBookCard } from './EditBookCard.jsx';
import { updaeBook } from "../../client.js";

jest.mock("../../client.js", () => ({
    updateBook: jest.fn()
}));

describe('EditBookCard', () => {
    it('renders the EditBookCard component successfully', () => {
        render(<EditBookCard />);
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