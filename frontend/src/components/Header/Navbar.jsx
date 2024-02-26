import React from "react";
import styles from "./styles/navbar.module.css";

function Navbar() {
  const links = [
    { name: "Add Your Business", path: "/bussiness" },
    { name: "Write a Review", path: "/review" },
  ];

  return (
    <div className={styles.navbar}>
      <h1>
        <a href="/">Taste&Rate</a>
      </h1>
      <div className={styles.navmenu}>
        <ul className={styles.navlinks}>
          {links.map((link) => (
            <li key={link.name}>
              <a href={link.path}>{link.name}</a>
            </li>
          ))}
        </ul>
        <button type="button" className={styles.login}>
          <a href="/login">Login</a>
        </button>
        <button type="button" className={styles.signup}>
          <a href="/signup">Signup</a>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
