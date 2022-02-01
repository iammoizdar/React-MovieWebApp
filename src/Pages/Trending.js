import TrendingMovies from "../components/TrendingMovies";
import { useState, useEffect } from "react";
const Trending = () => {

  const [trendmovie, setTrendmovie]=useState([])


  useEffect(()=>{
    gettrendingmovies()
  },[])

const gettrendingmovies= async()=>{
  const theresponse = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=d59ad13a6ae753bf936cf21fa42387244`)
  const moviesdata = await theresponse.json()
  setTrendmovie(moviesdata.results)
  console.log(moviesdata)
}

     
  return (
<>
    {trendmovie.map(trendingmovieslist =>(
      <TrendingMovies movieTitle={trendingmovieslist.original_title} Popularity={trendingmovieslist.popularity} Mediatype={trendingmovieslist.media_type} Releasedate={trendingmovieslist.release_date} Votecount={trendingmovieslist.vote_count}
      image={trendingmovieslist.poster_path} key={trendingmovieslist.original_title}
      />
    ))}
    </>
  )
};



export default Trending;
