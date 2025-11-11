import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import NotFound from './pages/NotFound.jsx';
import Home from './pages/Home.jsx';
import Cart from './pages/Cart.jsx';


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <NotFound />,
        children: [
            {
                index: true, 
                element: <Home />
            }, {
                path: '/cart',
                element: <Cart />
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)