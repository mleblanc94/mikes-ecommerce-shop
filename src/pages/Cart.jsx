import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
    // Get cart items from context
    const { items } = useCart();

    // Get removeFromCart from the shared cart context
        const { removeFromCart } = useCart();

    const total = items.reduce((sum, item) => 
        sum + item.price * item.qty, 0
    );

    return (
        <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
            <h1>Your Cart</h1>

            {items.length === 0 ? (
                <p>Your cart is empty!</p>
            ) : (
                <ul style={{ listStyle: 'none', padding: 0, alignItems: 'center' }}>
                    <h1>${total.toFixed(2)}</h1>
                    {items.map((item) => (
                        <li key={item.id} style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '12px', }}>
                            <li>{item.qty} X</li>
                            <img src={item.image} alt={item.title} width={80} />
                            <p>{item.title}</p>
                            <button onClick={() => removeFromCart(item.id)}>Remove</button>
                            </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Cart;