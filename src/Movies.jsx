import React from 'react';

const Movies = (props) => {
    const FavouriteComponent = props.favouriteComponent
return(
<div className='movies-list'>
    {props.movies.map((movie, index)=>(
    <div className='movie-card'>
        <div className="movie-info">
        <img src={movie.Poster} alt="movie" />
        <h2>{movie.Title}</h2>
        <p>{movie.Year}</p>

        <div className='add-fav' onClick={()=> props.handleFavouriteClick(movie)}>
            <FavouriteComponent/>
        </div>
        </div>
    </div>

    ))}

</div>
)
};

export default Movies;