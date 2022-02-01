import TrendingMovies from "../components/TrendingMovies";
import { useState, useEffect } from "react";
import { StyledNavbar, Nav, Logo } from "../components/Navbar/Navabr.styles";
import SearchMovies from "../components/SearchMovies";
import SiteLogo from '../assets/Images/netflixlogo.png'
import MovieCarousel from "../components/CarouselSlider/MovieCarousel";
import Animations from "../components/Animations";
const Trending = () => {

  const [trendmovies, setTrendmovie]=useState([])


  useEffect(()=>{
    gettrendingmovies()
  },[])

const gettrendingmovies= async()=>{
  const theresponse = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=d59ad13a6ae753bf936cf21fa4238724`)
  const moviesdata = await theresponse.json()
  setTrendmovie(moviesdata.results)
  console.log(moviesdata)
}

     
  return (
<>
   <StyledNavbar>
          <div className="container">
              <Nav>
          <Logo><img src={SiteLogo} alt="Logo" /></Logo>
          <SearchMovies />
          </Nav>
          </div>
      </StyledNavbar>
      <MovieCarousel/>
      <Animations/>
        <TrendingMovies trendmovies={trendmovies} />
    </>
  )
};



export default Trending;
