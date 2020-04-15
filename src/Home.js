import React, {Component} from 'react';
import './App.css';
import Search from './Search'
import axios from 'axios'
import MoviesList from './MoviesList'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: []
    }

    this.getMovies = this.getMovies.bind(this)
  }
  
  async getMovies (searchText) {
    const apiKey = '313899ee'
    let response = await axios.get(`http://www.omdbapi.com/?s=${searchText}&apiKey=${apiKey}`)
    let movies = response.data.Search
    this.setState({
      movies
    })
  }

  render() {
    return (
          <div className="App">
              <Search getMovies={this.getMovies}/>
              <MoviesList movies={this.state.movies}/>
          </div>
      );
    }
}

export default App;
