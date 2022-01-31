import React from 'react';
import { useEffect, useState } from 'react'
import axios from 'axios';

const Trending = () => {


// useEffect(()=>{
//     getTrending()
// },[])



// Fetching The Trending Api

// const getTrending = async()=>{
//     const theResponse = await fetch(
//         `https://api.themoviedb.org/3/trending/all/day?api_key=d59ad13a6ae753bf936cf21fa4238724`
//     )

//     const movieinfos = await theResponse.json()
//     console.log(movieinfos)
   
  
// }
const [person,setPerson]=useState([])
// const [name,setName]=useState([])


useEffect(()=>{
   axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=d59ad13a6ae753bf936cf21fa4238724`)
      .then(res => {
        const persons = res.data;
        setPerson( persons);
      })
    },[])
    console.log(person);


return(
    <div>
    
                        
    </div>
  );
};

export default Trending;
