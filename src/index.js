import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'),
// )
// .render(
//   // <BrowserRouter>
//   <React.StrictMode>
//     <App />
//     </React.StrictMode>
//   // </BrowserRouter>
// );

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);