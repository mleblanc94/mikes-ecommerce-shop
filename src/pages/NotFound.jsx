import React from 'react';
import { useLocation } from 'react-router-dom';

const NotFound = () => {
    let location = useLocation();
    return (
        <div>
            <h1>This path is not working - {location}</h1>
        </div>
    )
}

export default NotFound;