// import React from 'react', necessary libraries & components
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './../src/App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


import About from './pages/About.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Contact from './pages/Contact.jsx';
import Resume from './pages/Resume.jsx';

// Define routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <About />, // sets 'About' as the default page at the root
      },
      {
        path: '/Portfolio', // Defines path for 'Portfolio'
        element: <Portfolio />,
      },
      {
        path: '/Contact', // Defines path for 'Contact'
        element: <Contact />,
      },
      {
        path: '/Resume', // Defines path for 'Resume'
        element: <Resume />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);