import React, { Component } from "react";
import { Router } from '@reach/router'
import MoviesByTitle from '../../components/MoviesByTitle';
import MoviesByYear from '../../components/MoviesByYear';
import NavBar from '../../components/NavBar';

class Pages extends Component {
  render() {
    const { movies, getMovies } = this.props;
    return (
      <>
        <NavBar getMovies={getMovies} />
        <Router>
          <MoviesByTitle default path="search-movies" movies={movies} />
          <MoviesByYear path="search-movies-by-year" movies={movies} />
        </Router>
      </>
    );
  }
};

export default Pages;
