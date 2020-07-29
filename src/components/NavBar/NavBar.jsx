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
    const { setSearchType } = this.props
    return (
      <>
        <header>
          <nav className={styles.navBar + " " + (this.state.navIsShowing ? styles.displayNav : "")}>
            <ul className={styles.navWrapper}>
              <li className={styles.navToggler}>
                <div className={styles.navBurger} onClick={this.toggleNav}>
                  <h3>{this.toggleIcon()}</h3>
                </div>
              </li>
              <ul className={styles.navOptions + " " + (this.state.navIsShowing ? styles.navOpen : "")}>
                <li>
                  <div className={styles.searchOption}>
                    <Link to="search-movies" onClick={setSearchType}><h3>Search by<br />movie title</h3></Link>
                  </div>
                </li>
                <li>
                  <div className={styles.searchOption}>
                    <Link to="search-by-year"><h3>Search by<br />year of release</h3></Link>
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
