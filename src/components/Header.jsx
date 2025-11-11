import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="body">
            <Link to='/'>Shop</Link>
            <Link to='/cart'>Cart</Link>
        </div>
    )
}

export default Header;