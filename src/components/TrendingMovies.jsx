import Content from "../components/Content";
import styled from "styled-components";


const Trendingmovies = styled.div`
  display:flex;
`




const TrendingMovies = ({image, movieTitle, Popularity, Releasedate, Mediatype, Votecount}) => {
    

  return(
    <>
<Content Title="Trending"/>
<Trendingmovies>
<div className='movie-card'>
        <div className="movie-info">
        <img src={image} alt="movie" />
        <h2>{movieTitle}</h2>
        <p>{Popularity}</p>
        <span>{Releasedate}</span>
        <span>{Mediatype}</span>
        <h3>{Votecount}</h3>
        </div>
    </div>
</Trendingmovies>


 
  
</>
)}

export default TrendingMovies;
