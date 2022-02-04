import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Moviecard } from "./carousel.slider";
// import { CarouselWrapper } from "./carousel.slider";
import MovieCarddetails from "./MovieCardDetails";


const MovieCarousel=()=> {
    
   



        return (
            // <CarouselWrapper>

         
            <Carousel showArrows={false}  showThumbs={false} showIndicators={true} infiniteLoop={true} autoPlay={true} transitionTime={3} onChange={onchange} swipeable={true} emulateTouch={true}>
                <Moviecard >
                    <MovieCarddetails
                    movietitle="Money Heist" 
                    moviedetails="A criminal mastermind who goes by &quot;The Professor&quot; has a plan to pull off the biggest heist in recorded history — to print billions of euros in the Royal Mint of Spain. To help him carry out the ambitious plan, he recruits eight people with certain abilities and who..."
                    moviegenre="Genres"
                    genresname1="Crime,"
                    genresname2="Thriller,"
                    genresname3="Heist"
                    cast="Cast"
                    moviecast1="Úrsula Corberó,"
                    moviecast2=" Álvaro Morte,"
                    moviecast3=" Alba Flores,"
                    moviecast4=" Itziar Ituño"
                    />

                </Moviecard>
                <Moviecard primary>
                    <MovieCarddetails
                    movietitle="Strangers Things"
                    moviedetails="In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits. As they search for answers, the children unravel a series of extraordinary mysteries"
                     moviegenre="Genres"
                     genresname1="Science Fiction,"
                     genresname2="Horror,"
                     genresname3="Drama"
                     cast="Cast"
                     moviecast1="Millie Bobby Brown,"
                     moviecast2="Finn Wolfhard,"
                     moviecast3="Gaten Matarazzo,"
                     moviecast4="Caleb,"
                    />
                </Moviecard>
                <Moviecard secondary>
                    <MovieCarddetails
                    movietitle="Game of Thrones"
                    moviedetails ="Nine noble families wage war against each other in order to gain control over the mythical land of Westeros. Meanwhile, a force is rising after millenniums and threatens the existence of living men."
                    moviegenre="Genres"
                     genresname1="Science Fiction,"
                     genresname2="Fantasy,"
                     genresname3="Tragedy"
                      cast="Cast"
                     moviecast1="Kit Harington,"
                     moviecast2="Emilia Clarke,"
                     moviecast3="Massie Williams,"
                     moviecast4="Sophie Turner"
                    />

                </Moviecard>
          
            </Carousel>
            //    </CarouselWrapper>
        )
    
}

export default MovieCarousel