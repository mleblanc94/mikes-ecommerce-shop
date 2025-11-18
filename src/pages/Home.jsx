import React from 'react';
import { useEffect, useState } from 'react';
import './Home.css';
import { useCart } from '../context/CartContext';


const Home = () => {

    // Set your states
    const [products, setProducts] = useState([]);
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Get addToCart from the shared cart context
    const { addToCart } = useCart();

    // Pull the data from the API and set it in products state
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://dummyjson.com/products');
                if (!response.ok) {
                    throw new Error(`Error! status: ${response.status}`);
                }
                const result = await response.json();
                setProducts(result.products || []);
                console.log(result);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    // Filter Logic for user entering search
    const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
    );

    if (loading) return <div className='main-body'>Loading...</div>
    if (error) return <div className="main-body">Error: {error}</div>

    return (
        <div className="main-body">
            <h1>Products</h1>

            <input type="text" placeholder='Enter Product here' value={query} onChange={(e) => setQuery(e.target.value)} />

            {filteredProducts.map((product) => {
                return (
                    <div key={product.id}>
                    <img src={product.images[0]} alt={product.title} width={200}></img>
                    <div>{product.title}</div>
                    <div>{product.price}</div>
                    <button onClick={() => addToCart(product)}>Add to cart</button>
                    </div> 
                )
            })}
        </div>
    )
}

export default Home;