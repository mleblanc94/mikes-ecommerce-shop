import React from 'react';
import { useEffect, useState } from 'react';
import './Home.css';



const Home = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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
            }
        }
        fetchData();
    }, []);

    filterResults = () => {

    }


    return (
        <div className="main-body">
            <h1>Products</h1>
            <input type="text" onChange={(e) => setProducts(e.target.value)} />
            {products.map((product) => {
                return (
                    <div key={product.key}>
                    <img src={product.images[0]} alt={product.title} width={200}></img>
                    <div>{product.title}</div>
                    <div>{product.price}</div>
                    <button>Add to cart</button>
                    </div> 
                )
            })}
        </div>
    )
}

export default Home;