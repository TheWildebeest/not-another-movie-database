import React, { Component } from "react";
import { Link } from '@reach/router';
import styles from "./NavBar.module.scss";

class NavBar extends Component {

  state = {
    navIsShowing: true
  }

  toggleNav = () => {
    this.setState({
      navIsShowing: !this.state.navIsShowing,
    })
  }


  toggleIcon = () => {
    return this.state.navIsShowing ? "✖" : "☰";
  }

  render() {
    return (
      <>
        <header>
          <nav className={styles.navBar + " " + (this.state.navIsShowing ? styles.displayNav : "")}>
            <ul className={styles.navWrapper}>
              <li className={styles.navToggler}>
                <div className={styles.navBurger + " " + (this.state.navIsShowing ? styles.navOpen : "")} onClick={this.toggleNav}>
                  <h3>{this.toggleIcon()}</h3>
                </div>
              </li>
              <ul className={styles.navOptions + " " + (this.state.navIsShowing ? styles.navOpen : "")}>
                <li>
                  <div className={styles.searchOption}>
                    <h3>Search by title</h3>
                  </div>
                </li>
                <li>
                  <div className={styles.searchOption}>
                    <h3>Search by year</h3>
                  </div>
                </li>
              </ul>
            </ul>
          </nav>
        </header>
      </>
    );
  }
};

export default NavBar;
