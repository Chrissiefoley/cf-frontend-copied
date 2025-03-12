# APA1 Supa Task Frontend - Personal Book Library 

## Project Overview
This project is a React.js application that allows the user to create and manage their personal book library to store their books.
It includes CRUD functionality where a user can do the following with Express API:

C - Create a new book and add to their library - Add a new book with book details such as title, author, genre, and publication date via POST request: `api/new_book`.
R - Retrieve and read a list of the books in their library - Fetch all books through GET request: `api/books`. 
U - Update information about their books via edit form feature and PUT request to update database: `api/update_book/:book_id`. 
D - Delete a book from their library if they no longer own it using delete button on each book card: `api/delete_book/:book_id`. 

Core features outside of the CRUD functionality include:
// Update to show how a user can interact with it..... 
- Utilising React app and Material UI to build components. 
- User can search for books by title, with autocomplete feature, to filter specific book once data is fetched. 
- User can sort books in the library by title or author in Asending or Descending order.
- User can easily navigate the UI through navigation bar with links. 
- Responsive design for mobile and desktop devices.
- User can view the Total book count displayed on the My books page. 

## Tech Stack
- React.js 
- Material UI for UI components.
- Jest & React Testing Library for testing. 
- Express server for API calls to interact with Supabase database. 
- Supabase Client SDK for API and Auth.  
- React Router for navigation. 


## Setup and Running App 
1. Install dependencies: Run `npm install` in your terminal to install all necessary dependencies. This includes React, Material UI, Babel, Jest and other required packages.
2. To run the project - First open the backend application (https://github.com/Chrissiefoley/cf-frontend-copied) and run `npx supabase start` in the backend project terminal start local Docker-based Supabase instance.
3. Then open the front end application (https://github.com/Chrissiefoley/cf-frontend-copied) and run:
 - `Node server.js` in your terminal to get the express server running with the 8080 port. 
 - Open a second terminal and run `Npm start` to get the react app running with the 3000 port to ensure both are running in sync. 
4. Open your web browser and navigate to `http://localhost:3000` to access the application to view the application. 

## Database Management
The project uses Supabase as the database provider:
The [companion backend app](https://github.com/Chrissiefoley/cf-backend-copied) will be used to manage the database. 

## Testing
Testing is achieved through:
- Manual testing through the application interface to verify that the functionality is working as expected with console.log statements in the browser console to check for errors and debugging. 
- Some unit tests using Jest and React Testing Library in component files to test individual components/functions and integrations. 

