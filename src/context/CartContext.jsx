import React, { createContext, useContext, useState } from 'react';

// Creates the shared "cart box" that components will read from
const CartContext = createContext(null);

export const CartProvider = ({ children }) => {

    // The cart state that will be shared across the app
    const [items, setItems] = useState([]);

    // Function to update the shared cart
    const addToCart = (product) => {
        setItems((prevItems) => {
            // Check if the product is already in the cart (returns true or false)
            const existing = prevItems.find((item) => item.id === product.id);

            if (existing) {
                // If item already in the cart, increase the quantity
                return prevItems.map((item) => 
                item.id === product.id
                ? {...item, qty: item.qty + 1 }
                : item
                );
            }

            // If its a new product, add it with a quantity of 1
            return [
                ...prevItems,
                {
                    id: product.id,
                    title: product.title,
                    price: Number(product.price),
                    image: product.images?.[0] || product.thumbnail || '',
                    qty: 1,
                },
            ];
        });
    }

    const removeFromCart = (id) => {
        setItems((prevItems) => {
        // If it exists, subtract 1 from items quantity
        const updated = prevItems.map((item) => {
            if (item.id === id) {
                return { ...item, qty: item.qty - 1}
            }
            return item;
        });

        // Then remove any items that have a quantity <= 0
        return updated.filter((item) => item.qty > 0);
        })
    }

    // The shared data/function we expose to the whole app
    const value = { items, addToCart, removeFromCart };

    // Wrap the entire app with the provider so all components get access
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};

// Hook to let any component read/use the cart
export const useCart = () => {
    const ctx = useContext(CartContext);
    if (!ctx) throw new Error('useCart must be used within a CartProvider');
    return ctx;
}