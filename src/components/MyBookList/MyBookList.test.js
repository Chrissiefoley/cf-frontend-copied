// import { render, screen } from '@testing-library/react';
// import { BrowserRouter } from 'react-router-dom';
// import { waitFor } from '@testing-library/dom'; 

// describe ('MyBookList', () => {
//   it('renders MyBookList', () => {
//       render(
//         <BrowserRouter>
//             <MyBookList/>
//         </BrowserRouter>);
      
//       expect(screen.getByRole("My books").toBeInTheDocument());
//   });

//     it('nav links are clickable and navigate to correct page ', async () => {
//         render(
//         <BrowserRouter>
//             <HeaderNav />
//         </BrowserRouter>);
//         await useEvent.click(screen.getByText("My books"));

//         await waitFor(() => {
//             expect(mockUseNavigate).toHaveBeenCalledWith("/mybooks");
//     })
//   });
// });