import React, {Component} from 'react';
import './App.css';
import axios from 'axios'
import {Link} from 'react-router-dom'

class Movie extends Component {
  constructor(props) {
    super(props)
    this.state = {
        
    }
  }

  render() {    
    return (
        <div className="col-md-3">
            <div className="well text-center jumbotron">
                <img src={this.props.movie.Poster} alt=""/>
                <p>{this.props.movie.Title}</p>
                <Link to={'/' + this.props.movie.imdbID}>
                    <span className="btn btn-primary">Movie Details</span>
                </Link>
            </div>
        </div>
      );
    }
}

export default Movie;
