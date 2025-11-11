import React from 'react';

const NotFound = () => {
    let location = useLocation();
    return (
        <div>
            <h1>This path is not working - {location}</h1>
        </div>
    )
}

export default NotFound;