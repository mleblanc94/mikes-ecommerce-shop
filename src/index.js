import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import NotFound from './pages/NotFound.jsx';
import Home from './pages/Home.jsx';
import Cart from './pages/Cart.jsx';
import { CartProvider } from './context/CartContext.jsx';


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <NotFound />,
        children: [
            {
                index: true, 
                element: <Home />
            }, 
            {
                path: '/cart',
                element: <Cart />
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <CartProvider>
    <RouterProvider router={router} />
    </CartProvider>
)