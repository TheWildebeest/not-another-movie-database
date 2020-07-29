import React, { Component } from "react";
import styles from "./Homepage.module.scss";

class Homepage extends Component {
  render() {
    return (
      <main className={styles.main}>
        <h1 className={styles.mainTitle}>Oh dear, NOT<br />ANOTHER<br />movie<br />DAT<span className={styles.special}>A</span>BASE<span className={styles.special}>!</span></h1>
      </main>
    );
  }
}

export default Homepage;
