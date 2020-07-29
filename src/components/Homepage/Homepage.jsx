import React, { Component } from "react";
import styles from "./Homepage.module.scss";

class Homepage extends Component {
  render() {
    return (
      <main className={styles.main}>
        <h1 className={styles.mainTitle}>Yet<br /> Another<br />Movie<br />Database</h1>
      </main>
    );
  }
}

export default Homepage;
