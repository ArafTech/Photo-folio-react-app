import React from "react";
import logo from "./logo.png";
// import PropTypes from "prop-types";
import styles from "./NavBar.module.css";

const NavBar = () => (
  <div className={styles.header}>
    <img src={logo} alt="Logo" />
    <span className="text-blue-400">Photofolio</span>
  </div>
);

// NavBar.propTypes = {};

// NavBar.defaultProps = {};

export default NavBar;
