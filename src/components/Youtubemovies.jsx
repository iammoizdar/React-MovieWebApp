import React from 'react';




const Youtubemovies = (props) => {
  return(

<>

    <div className='movies-list'>
    {props.ytrendmovies.map((ymovie, index)=>(
    <div className='movie-card'>
        <div className="ymovie-info">
            <img src={`https://i.ytimg.com/vi/${ymovie.id.videoId}/hqdefault.jpg`} alt="" />
        <h2>{ymovie.snippet.title}</h2>
        <p>{ymovie.snippet.channelTitle}</p>

        </div>
    </div>

    ))}

</div>
</>
  )
};

export default Youtubemovies;
