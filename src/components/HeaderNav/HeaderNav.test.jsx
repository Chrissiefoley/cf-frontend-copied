import React from "react";
import { render, screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { HeaderNav } from './HeaderNav';

describe('HeaderNav', () => {
  it('renders nav with links ', () => {
    const router = createMemoryRouter([
      {
        path: '/',
        element: <HeaderNav />,
      },
    ]);

    render(
      <RouterProvider router={router}/>);
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("My books")).toBeInTheDocument();
    expect(screen.getByText("Add book")).toBeInTheDocument();
  });
})

