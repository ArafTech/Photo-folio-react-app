import React from "react";
import logo from "./logo.png";
import styles from "./NavBar.module.css";

const NavBar = () => (
  <div className={styles.header}>
    <img src={logo} alt="Logo" />
    <span className="text-blue-400">Photofolio</span>
  </div>
);


export default NavBar;
