import React, { Component } from "react";
import styles from "./MoviesByTitle.module.scss";
import CardList from '../../containers/CardList';
import SearchBox from '../SearchBox'

class MoviesByTitle extends Component {
  render() {
    const { movies, getMovies } = this.props;
    return (
      <>
        <main className={styles.main}>
          <SearchBox getMovies={getMovies} />
          <CardList movies={movies} />
        </main>
      </>
    );
  }
}

export default MoviesByTitle;
