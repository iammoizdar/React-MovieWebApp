import { useState, useEffect } from "react";
import { StyledNavbar, Nav, Logo } from "../components/Navbar/Navabr.styles";
import SiteLogo from '../assets/Images/netflixlogo.png'
import MovieCarousel from "../components/CarouselSlider/MovieCarousel";
import Youtubemovies from "../components/Youtubemovies";

const Trending = () => {

  const [ytrendmovies, setYTrendmovie] = useState([])
  const [search, setSearch] = useState("")
  const [query, setQuery] = useState('Movies')

  useEffect(()=>{
    getyoutubetrendingmovies()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[query])


const updateSearch = e =>{
  setSearch(e.target.value)
}

const getSearch = e => {
  e.preventDefault()
  setQuery(search)
}


const Ysearchbar =()=>{
    return(
       <div class="flexbox">
  <div class="search">
    <h1>Search this site</h1>
    <h3>Click on search icon, then type your keyword.</h3>
    <form onSubmit={getSearch}>
      
      <input type="text" value={search} onChange={updateSearch} placeholder="Search . . ." required/>
    </form>
  </div>
</div>
    )
}




const getyoutubetrendingmovies= async()=>{
  const theresponse = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${query}&type=video&key=AIzaSyD2gGjfSvsdDxZMEYkKwudWbfWp5YKVw1o`)
  const ymoviesdata = await theresponse.json()
  setYTrendmovie(ymoviesdata.items)
  console.log(ymoviesdata.items)
}

     
  return (
<>
   <StyledNavbar>
          <div className="container">
              <Nav>
          <Logo><img src={SiteLogo} alt="Logo" /></Logo>
          </Nav>
          </div>
      </StyledNavbar>
      <MovieCarousel/>
      <Ysearchbar/>
        <Youtubemovies ytrendmovies={ytrendmovies} />
    </>
  )
};



export default Trending;
