import React, { Component } from "react";
import styles from "./CardList.module.scss";
import Card from '../../components/Card';

class CardList extends Component {
  getCardJsx = (movie, index) => (
    <Card key={index} movie={movie} />
  );

  render() {
    const { movies } = this.props;
    return (
      <section className={styles.cardList}>{
        movies ? movies.map((movie, index) => this.getCardJsx(movie, index)) : null}</section>
    );
  }
}

export default CardList;
