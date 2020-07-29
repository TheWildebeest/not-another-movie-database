import React, { Component } from "react";
import { Router } from '@reach/router'
import MoviesByTitle from '../../components/MoviesByTitle';
import MoviesByYear from '../../components/MoviesByYear';
import Homepage from '../../components/Homepage';
import NavBar from '../../components/NavBar';

class Pages extends Component {
  render() {
    const { movies, getMovies, getYear } = this.props;
    return (
      <>
        <NavBar />
        <Router>
          <Homepage default />
          <MoviesByTitle path="search-movies" movies={movies} getMovies={getMovies} />
          <MoviesByYear path="search-by-year" movies={movies} getMovies={getMovies} getYear={getYear} />
        </Router>
      </>
    );
  }
};

export default Pages;
