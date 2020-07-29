import React, { Component } from "react";
import styles from "./Card.module.scss";

class Card extends Component {
  render() {
    const { movie } = this.props
    return (
      <article className={styles.card}>
        <div className={styles.moviePoster} style={{ backgroundImage: `url("${movie.Poster}")` }}>
        </div>
        <header className={styles.titleWrapper}>
          <h4 className={styles.movieTitle}>{movie.Title}</h4>
        </header>
        <main >
          <p>Lorem Ipsum coming soon!</p>
        </main>
      </article >
    );
  }
}

export default Card;
