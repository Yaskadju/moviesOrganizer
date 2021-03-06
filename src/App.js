import React, {Component} from 'react';
import './App.css';
import Search from './Search'
import axios from 'axios'
import MoviesList from './MoviesList'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './Home'
import MovieInfo from './MovieInfo'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }
  
  render() {
    return (
        <BrowserRouter>
          <div className="App">
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/:movie_id' component={MovieInfo} /> 
            </Switch>
          </div>
        </BrowserRouter>
      );
    }
}

export default App;
