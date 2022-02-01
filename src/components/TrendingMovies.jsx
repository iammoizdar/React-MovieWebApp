import React from 'react';
import KeepMountedModal from './Modal';

const TrendingMovies = (props) => {
return(
<div className='movies-list'>
    {props.trendmovies.map((movie, index)=>(
    <div className='movie-card'>
        <div className="movie-info">
        <img src={"https://image.tmdb.org/t/p/w500"+ movie.backdrop_path} alt="movie" />
        <h2>{movie.title}{movie.name}</h2>
        {/* <p className='trendmoviedetails'>{movie.overview}</p> */}
        <span>Language: {movie.original_language}{movie.origin_country}</span>
        <p>Vote Average: {movie.vote_average}</p>
        <p>Popularity: {movie.popularity}</p>
        <span>Release Date: {movie.release_date}{movie.first_air_date}</span>
<KeepMountedModal text={movie.name} details="itsworking"/>
        </div>
    </div>

    ))}

</div>
)
};

export default TrendingMovies;