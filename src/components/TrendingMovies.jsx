import Content from "../components/Content";
const TrendingMovies = ({image, movieTitle, Popularity, Releasedate, Mediatype, Votecount}) => {
    

  return(
    <>
<Content Title="Trending"/>
  
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
  
</>
)}

export default TrendingMovies;
