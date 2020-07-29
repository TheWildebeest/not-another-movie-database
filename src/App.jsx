import React, { Component } from 'react';
import Pages from './containers/Pages';
import './App.css';

class App extends Component {

  state = {
    movies: [],
    moviesByYear: [],
    wildcard: "",
    searchTerm: ""
  }

  getYear = (year) => {
    const { movies } = this.state;
    let filteredMovies = movies.filter(movie => movie.Year.includes(year));
    if (movies && filteredMovies) {
      this.setState({
        moviesByYear: filteredMovies
      })
    } else {
      this.setState({ moviesByYear: movies });
    }
  }

  getMovies = (searchTerm) => {
    fetch(`http://www.omdbapi.com/?s=${searchTerm}*&apikey=4f7fe0c3`)
      .then(response => response.json())
      .then(data => this.setState({ movies: data.Search }))
      .catch(error => this.setState({ movies: error }));
    this.setState({ searchTerm: searchTerm });
  }


  render() {
    const { movies, moviesByYear } = this.state;
    return (
      <Pages movies={movies} moviesByYear={moviesByYear} getMovies={this.getMovies} getYear={this.getYear} />
    );
  }
}

export default App;
