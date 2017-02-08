import React from 'react';
import { Carousel } from 'react-bootstrap';
import testData from '../data/onConnect.js';
import helpers from '../lib/helpers'

class Nowplaying extends React.Component {
  constructor() {
    super();
    this.state = {
      currentMovies: [],
      apikey: 'vah23z92k8mvpscqy7nrg44e'
    };
    helpers.getMovies().then(movies=> {
      console.log(movies);
      this.setState({
        currentMovies: movies.data
      });
    });
  }

  render() {
    return (
    <Carousel className="carouselClass" indicators={false}>
      {this.state.currentMovies.map(movie =>
        <Carousel.Item>
          <div className="col-md-12 carousel-title-box">
            <h4 className="carousel-title">{movie.title}</h4>
          </div>
          <div className="col-md-12">
            <p className="carousel-description">{movie.shortDescription}</p>
            <h8>Genres: { movie.genres ? movie.genres.join(', ') : 'N/A'}</h8>

          </div>
          <div className="carousel-showtimes">
            <div>
              <h8 className="carousel-showtimes-title">Showtimes</h8>
            </div>
            {movie.showtimes.map(time =>
              <h8><a href={time.ticketURI}>{
                  time.dateTime.slice(5).split('T').join(' ')}  | </a></h8>
            )}
          </div>
        </Carousel.Item>

      )}
    </Carousel>
  );
  }



}



//
//
// <div id="myCarousel" className="carousel slide" data-ride="carousel">
//   <ol className="carousel-indicators">
//     <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
//     <li data-target="#myCarousel" data-slide-to="1"></li>
//     <li data-target="#myCarousel" data-slide-to="2"></li>
//     <li data-target="#myCarousel" data-slide-to="3"></li>
//   </ol>
//
//   <div className="carousel-inner" role="listbox">
//     {testData.map((movie, i) =>
//       <CarouselEntry movie={movie} i = {i} />
//     )}
//   </div>
//
//   <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
//     <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
//     <span className="sr-only">Previous</span>
//   </a>
//   <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
//     <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
//     <span className="sr-only">Next</span>
//   </a>
// </div>

export default Nowplaying;
