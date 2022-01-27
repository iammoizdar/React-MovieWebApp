 import React from "react"
 import styled from 'styled-components'
export const Carddetails= styled.div`
    display: flex;
    flex-direction: column;
   

`


 const MovieCarddetails=(props)=>{
        return(
            <Carddetails>
                <h2>{props.movietitle}</h2>
                <p>{props.moviedetails}</p>
                <span>{props.genres}</span>
                <span>{props.cast}</span>
            </Carddetails>
        )

    }



    export default MovieCarddetails