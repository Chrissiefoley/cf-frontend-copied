# APA1 Supa Task Frontend

## Project Overview
This project for an open ending CRUD app, what the app does is your choice but it should implement CRUD functionality

## Setup Instructions
1. Install dependencies: Run `npm install` in your terminal to install all necessary dependencies.
2. Set up Supabase:
   - Create a free Supabase account if you don't have one
   - Create a new project in your Supabase dashboard
   - Copy your Supabase URL and anon key into the `.env` file (use `.env.example` as a template)
3. Start the development server: Run `node server.js` in your terminal.
4. Start the React app: Run `npm start` in a second terminal. 
4. Open your web browser and navigate to `http://localhost:3000` to access the application to view the application. 

## Database Management
The project uses Supabase as the database provider:

The [companion backend app](https://github.com/jdowie-ada/apa1-supa-task-backend) will be used to manage the database 

## Testing
Testing is achieved through:
- Manual testing through the application interface
Unit tests also exist in each file using Jest framework, to run all tests run `npm run test`

## TODO

### Core Functionalities
1. Implement full CRUD operations for all items using Supabase's JavaScript client
2. Create a unified interface to manage all items
3. Create appropriate database relationships and constraints using Supabase's SQL editor

### Implementation 

## Additional Features (Optional)
1. Implement responsive design for different devices
2. Add accessibility features following WCAG guidelines
3. Implement more advanced Supabase features:
   - Real-time updates using Supabase subscriptions
   - Storage for product images
   - Edge Functions for complex operations


Remember to document your development process, including any challenges you encounter and how you solve them. This will be valuable during your viva and for maintaining the project in the future.