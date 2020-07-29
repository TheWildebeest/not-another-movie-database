import React, { Component } from "react";
import styles from "./SearchBox.module.scss";

class SearchBox extends Component {
  render() {
    const { getMovies } = this.props;
    return (
      <>
        <input className={styles.searchBox}
          type="text"
          placeholder={"Type in a movie title..."}
          onInput={(e) => getMovies(e.target.value)}
          autoFocus={true}
        />
      </>
    );
  }
}

export default SearchBox;
