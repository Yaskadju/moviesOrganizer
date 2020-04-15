import React, {Component} from 'react';
import './App.css';
import axios from 'axios'

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
        input: ''
    }
  }

  handleInput = (e) => {
      this.setState({
          input: e.target.value
      })
  }
  
  handleSubmit = (e) => {
      e.preventDefault()
      this.setState({
          input: ''
      })  

      if(this.state.input)
      {
          this.props.getMovies(this.state.input)
      }
  }
  
  render() {
    
    return (
        <div className="container">
          <div className="jumbotron">
            <h3 className="text-center">Search for any movie</h3>
            <form id="searchForm" onSubmit={this.handleSubmit}>
              <input value={this.state.input} type="text" id="searchText" placeholder="Search Movie" className="form-control" onChange={this.handleInput}/>
            </form>
          </div>
        </div>
      );
    }
}

export default Search;
