import React from 'react';
import Film from './Film';


const FilmList = ({films}) => {
    const filmNodes = films.map((film) => {
        return(
            <Film url={film.url} key={film.id} name={film.name}></Film>
        )
    })

    return(
        <div className="film-list">
            {filmNodes}
        </div>
    )
}

export default FilmList;