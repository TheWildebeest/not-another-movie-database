import React, { Component } from "react";
import styles from "./Card.module.scss";

class Card extends Component {
  render() {
    const { movie } = this.props
    return (
      <article className={styles.card}>
        <div className={styles.moviePoster} style={movie.Poster.split("")[0] === "h" ? { backgroundImage: `url("${movie.Poster}")` } : { backgroundImage: `url("https://picsum.photos/220/336")` }}>
        </div>
        <header className={styles.titleWrapper}>
          <h4 className={styles.movieTitle}>{movie.Title}</h4>
        </header>
        <main >

        </main>
      </article >
    );
  }
}

export default Card;
