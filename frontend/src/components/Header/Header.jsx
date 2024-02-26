import React from "react";
import styles from "./styles/header.module.css";
import Navbar from "./Navbar";
import Menu from "./Menu";

function Header() {
  return (
    <div className={styles.header}>
      <Navbar />
      <Menu />
    </div>
  );
}

export default Header;
