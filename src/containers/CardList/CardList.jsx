import React, { Component } from "react";
import styles from "./CardList.module.scss";
import Card from '../../components/Card';

class CardList extends Component {
  getCardJsx = (movie) => (
    <Card key={movie.Title} movie={movie} />
  );

  render() {
    const { movies } = this.props;
    return (
      <section className={styles.cardList}>{movies ? movies.map((movie) => this.getCardJsx(movie)) : null}</section>
    );
  }
}

export default CardList;
