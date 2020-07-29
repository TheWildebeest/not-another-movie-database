import React, { Component } from 'react';
import Pages from './containers/Pages';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    movies: null,
    searchType: "s"
  }

  getMovies = (searchTerm) => {
    fetch(`http://www.omdbapi.com/?${this.state.searchType}=${searchTerm}*&plot=full&apikey=4f7fe0c3`)
      .then(response => response.json())
      .then(data => this.setState({ movies: data }))
      .catch(error => this.setState({ movies: error }));
  }


  render() {
    const { movies, searchTerm } = this.state;
    return (
      <Pages movies={movies} searchTerm={searchTerm} getMovies={this.getMovies} />
    );
  }
}

export default App;
