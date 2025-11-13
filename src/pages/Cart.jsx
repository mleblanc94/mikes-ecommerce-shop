import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
    // Get cart items from context
    const { items } = useCart();

    const total = items.reduce((sum, item) => 
        sum + item.price * item.qty, 0
    );

    return (
        <div>
            <h1>Cart</h1>

            {items.length === 0 ? (
                <p>Your cart is empty!</p>
            ) : (
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    {items.map((item) => (
                        <li key={item.id} style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '12px', }}>
                            <img src={item.image} alt={item.title} width={80} />
                            
                            </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Cart;