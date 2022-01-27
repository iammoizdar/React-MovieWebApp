 import React from "react"
 import styled from 'styled-components'
export const Carddetails= styled.div`
    display: flex;
    flex-direction: column;
   justify-content: center;
   padding:24px;
   align-items:baseline;
 text-align:left;
 grid-gap: 12px;
 color: #ffffff;
   p{
       max-width: 421px;
   }
      h2{
       font-size: 50px;
       font-weight: 700;
   }
   span{
       text-decoration: underline;
   }
   .genres,.cast{
       display: flex;
       gap: 5px;
   }

`



 const MovieCarddetails=(props)=>{
        return(
            <Carddetails>
                <h2>{props.movietitle}</h2>
                <p>{props.moviedetails}</p>
                <div>
                <h3>{props.moviegenre}</h3>
                <div className="genres">
                    <span>{props.genresname1}</span>
                    <span>{props.genresname2}</span>
                    <span>{props.genresname3}</span>
                </div>
                </div>
                <div>
                <h3>{props.cast}</h3>
                <div className="cast">
                    <span>{props.moviecast1}</span>
                    <span>{props.moviecast2}</span>
                    <span>{props.moviecast3}</span>
                    <span>{props.moviecast4}</span>
                </div>
                </div>
             
            </Carddetails>
        )

    }



    export default MovieCarddetails