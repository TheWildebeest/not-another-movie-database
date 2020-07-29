import React, { Component } from 'react';
import Pages from './containers/Pages';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    movies: [],
    year: "*",
    wildcard: ""
  }

  getYear = (year) => {
    this.setState({ year: year })
  }

  getMovies = (searchTerm) => {
    fetch(`http://www.omdbapi.com/?s=${searchTerm}*&y=${this.state.year}&plot=full&apikey=4f7fe0c3`)
      .then(response => response.json())
      .then(data => this.setState({ movies: data.Search }))
      .catch(error => this.setState({ movies: error }));
  }


  render() {
    const { movies } = this.state;
    return (
      <Pages movies={movies} getMovies={this.getMovies} getYear={this.getYear} />
    );
  }
}

export default App;
