import { useState, useEffect } from 'react';
import Movies from './Movies';
import './App.css';
import MoviesHeading from './MoviesHeading';
import SearchMovies from './SearchMovies';
import AddFavourites from './AddFavourites';
import RemoveFavourites from './RemoveFavourites';
import Animations from './Animations';


function App() {
// STATES
const [movies, setMovies] = useState([])
const [searchValue, setSearchValue] = useState('')
const [favourites, setFavourites] = useState([])

useEffect(()=>{
getMovies(searchValue)
// eslint-disable-next-line react-hooks/exhaustive-deps
},[searchValue])

// Saving to Local Storage

useEffect(()=>{
const movieFavourites = JSON.parse(
localStorage.getItem('react-movies-app-favourite')
)
if (movieFavourites) {
setFavourites(movieFavourites)
}
},[])

// FETCHING THE MOVIE DATA FROM API

const getMovies = async(searchValue)=>{
const response = await fetch(
`https://www.omdbapi.com/?s=${searchValue}s&apikey=2fbf23b`
)
const data = await response.json()
console.log(data)
if (data.Search){
setMovies(data.Search)
}
}

// Saving To Local Storage

const saveToLocalStorage = (items) => {
localStorage.setItem('react-movies-app-favourite', JSON.stringify(items))
}

// For Adding fav Movie

const addFavoutiteMovie = (movie)=>{
const FavouriteList = [...favourites, movie]
setFavourites(FavouriteList)
saveToLocalStorage(FavouriteList)
}

// For Removing Fav Movies
const removeFavouriteMovie = (movie)=>{
const FavouriteList = favourites.filter(
(favourite) => favourite.omdb !== movie.omdb
)
setFavourites(FavouriteList)
saveToLocalStorage(FavouriteList)
}






return (
<div className="App">
  <div class="area">
     <Animations />
    <div className="heading">
      <MoviesHeading title="Movies Web App" />
      <SearchMovies searchValue={searchValue} setSearchValue={setSearchValue} />
    </div>
    <div className="movies-container">
      <Movies movies={movies} handleFavouriteClick={addFavoutiteMovie} favouriteComponent={AddFavourites} />
      <div className="movies-favourites">
        <MoviesHeading title="Favourites" />
        <Movies movies={favourites} handleFavouriteClick={removeFavouriteMovie} favouriteComponent={RemoveFavourites} />
    
      </div>
    </div>
 
  </div>
   
</div>
);
}

export default App;