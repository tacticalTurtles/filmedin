import React from 'react';
import { Carousel } from 'react-bootstrap';
import helpers from '../lib/helpers'
import movies from '../data/onConnect';

class Nowplaying extends React.Component {
  constructor() {
    super();
    this.state = {
      currentMovies: movies,
      apikey: 'vah23z92k8mvpscqy7nrg44e'
    };
    // helpers.getMovies().then( movies => {
      // console.log(movies);
      // this.setState({
      //   currentMovies: movies
      // });
    // });
  }

  render() {
    return (
    <Carousel className="carouselClass" indicators={false}>
      {this.state.currentMovies.map(movie =>
        <Carousel.Item>
          <div className="col-md-3 carousel-movie-img">
            <img className="movie-img" src={movie.preferredImage.uri} />
          </div>
          <div className="col-md-9 carousel-movie-text">
            <h4 className="carousel-title carousel-title-box">[{movie.title.split(' ').join('_')}]</h4>
            <p className="carousel-description">{movie.shortDescription}</p>
            <h8 className='carousel-showtimes-title'>Genres: { movie.genres ? movie.genres.join(', ') : 'N/A'}</h8>
            <div className="carousel-showtimes">
              <h8 className="carousel-showtimes-title">Upcoming Showtimes:</h8>
              <p>
                {movie.showtimes.map(time =>
                  <a href={time.ticketURI}>{
                      time.dateTime.slice(5).split('T').join(' ')}  | </a>
                  )}
                </p>
              </div>
            </div>
        </Carousel.Item>
      )}
    </Carousel>
  );
  }
}

export default Nowplaying;
