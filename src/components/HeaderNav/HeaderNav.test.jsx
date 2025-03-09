import React from "react";
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { HeaderNav } from './HeaderNav';
import { waitFor } from '@testing-library/dom'; 

const mockUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...(jest.requireActual('react-router-dom')),
    useNavigate: () => mockUseNavigate(),
}));

const navigateWasCalledWith = async (url) => {
    return waitFor(() => expect(mockUseNavigate).toHaveBeenCalledWith(url));
}

describe ('HeaderNav', () => {
  it('renders nav with links ', () => {
      render(
        <BrowserRouter>
            <HeaderNav />
        </BrowserRouter>);
      
      expect(screen.getByText("My books")).toBeInTheDocument();
  });

  it('nav links are clickable and navigate to correct page ', async () => {
      const user = userEvent.setup();
        render(
        <BrowserRouter>
            <HeaderNav />
          </BrowserRouter>);
        await user.click(screen.getByText("My books"));
        await waitFor(() => {
            expect(mockUseNavigate).toHaveBeenCalledWith("/mybooks");
    })
  });
});