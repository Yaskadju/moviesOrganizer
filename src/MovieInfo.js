import React, {Component} from 'react';
import './App.css';
import axios from 'axios'
import Movie from './Movie';
import {Link} from 'react-router-dom'

class MovieInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
        movie: null
    }
  }

  async componentDidMount() {
    let id = this.props.match.params.movie_id
    const apiKey = '313899ee'
    let response = await axios.get(`http://www.omdbapi.com/?i=${id}&apiKey=${apiKey}`)
    let movie = await response.data
    this.setState({
        movie
    })
  }

  render() {
    
    const movie = this.state.movie ? (
        
        <div className="container">
            <div className="well margin" id="movie">
                <div className="row">
                    <div className="col-md-4">
                        <img src={this.state.movie.Poster} class="thumbnail" alt=""/>
                    </div>
                    <div className="col-md-8">
                    <h2>{this.state.movie.Title}</h2>
                        <ul className="list-group">
                            <li className="list-group-item">Genre: {this.state.movie.Genre}</li>
                            <li className="list-group-item">Released: {this.state.movie.Released}</li>
                            <li className="list-group-item">Rated: {this.state.movie.Rated}</li>
                            <li className="list-group-item">IMDB Rating: {this.state.movie.imdbRating}</li>
                            <li className="list-group-item">Director: {this.state.movie.Director}</li>
                            <li className="list-group-item">Writer: {this.state.movie.Writer}</li>
                            <li className="list-group-item">Actors: {this.state.movie.Actors}</li>
                        </ul>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="well">
                        <h3 className="text-center">Plot</h3>
                        {this.state.movie.Plot}
                        <hr/>
                        <a href={"http://imdb.com/title/" + this.state.movie.imdbID} target="_blank" class="btn btn-primary">View On IMDB</a>
                        
                        <Link to='/'>
                            <span className="btn btn-secondary">Go Back to search</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    ) : (
        <div>Loading Movie...</div>
    ) 

    return (
        <div>
            <p>{movie}</p>
        </div>
      );
    }
}

export default MovieInfo;
