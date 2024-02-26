import React from "react";
import styles from "./styles/footer.module.css";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className={styles.footer}>
      <p>Copyright © {year} Taste&Rate Inc. All rights reserved.</p>
    </div>
  );
}

export default Footer;
