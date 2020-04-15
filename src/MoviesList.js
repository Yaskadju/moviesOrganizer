import React, {Component} from 'react';
import './App.css';
import axios from 'axios'
import Movie from './Movie'

const MoviesList = (props) => {
    return (
        <div className="container movie-grid">
            <div id="movies" className="row">
                {props.movies.map(movie => {
                    return (
                        <Movie key={movie.imdbID} movie={movie}/>
                    )
                })}
            </div>
        </div>
      );
    }


export default MoviesList;
