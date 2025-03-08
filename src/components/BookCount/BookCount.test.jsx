import { render, screen } from '@testing-library/react';
import { BookCount } from './BookCount';
import { waitFor } from '@testing-library/dom'; 

const mockUseEffect = jest.fn();

describe ('BookCount', () => {
  it('renders book count', () => {
      render(
            <BookCount/>
);
      expect(screen.getByText("Book count").toBeInTheDocument());
  });

    it('updates book count when book is added or removed ', async () => {
        render(
        <BrowserRouter>
            <HeaderNav />
        </BrowserRouter>);
        await userEvent.click(screen.getByText("My books"));

        await waitFor(() => {
            expect(mockUseNavigate).toHaveBeenCalledWith("/mybooks");
    })
  });
});