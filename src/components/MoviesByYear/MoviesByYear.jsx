import React, { Component } from "react";
import styles from "./MoviesByYear.module.scss";
import CardList from '../../containers/CardList';
import SearchBox from '../SearchBox'

class MoviesByYear extends Component {

  componentDidMount() {
    this.props.getYear("");
  }

  render() {
    const { moviesByYear, getYear } = this.props;
    return (
      <>
        <main className={styles.main}>
          <SearchBox inputHandler={(e) => getYear(e.target.value)} placeholder={"e.g. '1942'"} />
          <CardList movies={moviesByYear} />
        </main>
      </>
    );
  }
}

export default MoviesByYear;
