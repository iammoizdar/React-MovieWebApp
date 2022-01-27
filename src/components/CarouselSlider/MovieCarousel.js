import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Moviecard } from "./carousel.slider";
import ThirdMovie from '../../assets/Images/third-movie.png'
import SecondMovie from '../../assets/Images/second-movie.png'
import { CarouselWrapper } from "./carousel.slider";
import MovieCarddetails from "./MovieCardDetails";


const MovieCarousel=()=> {
    
   



        return (
            <CarouselWrapper>

         
            <Carousel showArrows = {false} centerMode={true} showThumbs={false} showIndicators={true} infiniteLoop={true}>
                <Moviecard >
                    <MovieCarddetails movietitle="Money Heist"/>
                </Moviecard>
                <Moviecard primary>
                    <MovieCarddetails movietitle="Money Heist"/>
                </Moviecard>
                <Moviecard secondary>
                    <MovieCarddetails movietitle="Money Heist"/>
                </Moviecard>
          
            </Carousel>
               </CarouselWrapper>
        )
    
}

export default MovieCarousel