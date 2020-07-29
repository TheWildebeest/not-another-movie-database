import React, { Component } from "react";
import styles from "./SearchBox.module.scss";

class SearchBox extends Component {
  render() {
    const { inputHandler, placeholder } = this.props;
    return (
      <>
        <input className={styles.searchBox}
          type="text"
          placeholder={placeholder}
          onChange={inputHandler}
          autoFocus={false}
        />
      </>
    );
  }
}

export default SearchBox;
