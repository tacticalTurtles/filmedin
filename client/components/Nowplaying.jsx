import React from 'react';
import { Carousel } from 'react-bootstrap';
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
            <h4 className="carousel-title">[{movie.title.split(' ').join('_')}]</h4>
          </div>
          <div className="col-md-12">
            <p className="carousel-description">{movie.shortDescription}</p>
            <h8 className='carousel-showtimes-title'>Genres: { movie.genres ? movie.genres.join(', ') : 'N/A'}</h8>

          </div>
          <div className="carousel-showtimes">
            <div>
              <h8 className="carousel-showtimes-title col-md-12">Showtimes</h8>
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

export default Nowplaying;
