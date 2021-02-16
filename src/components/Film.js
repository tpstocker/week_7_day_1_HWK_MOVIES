import React from 'react';

const Film = ({url, name}) => {
    return(
        <div className="film">
            <h4><a href={url}>{name}</a></h4>
        </div>
    )
}

export default Film;