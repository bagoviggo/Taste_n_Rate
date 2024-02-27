import React, { useState } from "react";
import styles from "./styles/price.module.css";

function Price() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Prices");

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <div className={styles.prices}>
        <input type="text" value={selected} onClick={toggleDropdown} />
        <div>
          {isOpen && (
            <div className={styles.dropdown}>
              <div className={styles.price}>
                <input
                  type="checkbox"
                  className={styles.checkbox}
                  id="price"
                  value="$"
                  onClick={(e) => setSelected(e.target.value)}
                />
                <label htmlFor="price">$</label>
              </div>
              <div className={styles.price}>
                <input
                  type="checkbox"
                  className={styles.checkbox}
                  id="price"
                  value="$$"
                  onClick={(e) => setSelected(e.target.value)}
                />
                <label htmlFor="price">$$</label>
              </div>
              <div className={styles.price}>
                <input
                  type="checkbox"
                  className={styles.checkbox}
                  id="price"
                  value="$$$"
                  onClick={(e) => setSelected(e.target.value)}
                />
                <label htmlFor="price">$$$</label>
              </div>
              <div className={styles.price}>
                <input
                  type="checkbox"
                  className={styles.checkbox}
                  id="price"
                  value="$$$$"
                  onClick={(e) => setSelected(e.target.value)}
                />
                <label htmlFor="price">$$$$</label>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Price;
