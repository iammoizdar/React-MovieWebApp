import TrendingMovies from "../components/TrendingMovies";
import { useState, useEffect } from "react";
const Trending = () => {

  const [trendmovie, setTrendmovie]=useState([])


  useEffect(()=>{
    gettrendingmovies()
  },[])

const gettrendingmovies= async()=>{
  const theresponse = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=d59ad13a6ae753bf936cf21fa4238724`)
  const moviesdata = await theresponse.json()
  setTrendmovie(moviesdata.results)
  console.log(moviesdata.results)
}

     
  return (
<>
    {trendmovie.map(trendingmovieslist =>(
      <TrendingMovies movieTitle={trendingmovieslist.trendingmovieslist.original_title} Popularity={trendingmovieslist.trendingmovieslist.popularity} Mediatype={trendingmovieslist.trendingmovieslist.media_type} Releasedate={trendingmovieslist.trendingmovieslist.release_date} Votecount={trendingmovieslist.trendingmovieslist.vote_count}
      image={trendingmovieslist.trendingmovieslist.poster_path} key={trendingmovieslist.trendingmovieslist.original_title}
      />
    ))}
    </>
  )
};



export default Trending;
