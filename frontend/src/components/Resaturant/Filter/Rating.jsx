import React, { useState } from "react";
import styles from "./styles/rating.module.css";

function Rating() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Ratings");

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <div className={styles.search}>
        <input type="text" value={selected} onClick={toggleDropdown} />
        <div>
          {isOpen && (
            <div className={styles.dropdown}>
              <div className={styles.rate}>
                <input
                  type="checkbox"
                  className={styles.checkbox}
                  id="rate"
                  value="5"
                  onClick={(e) => setSelected(e.target.value)}
                />
                <label htmlFor="rate">5 Stars</label>
              </div>
              <div className={styles.rate}>
                <input
                  type="checkbox"
                  className={styles.checkbox}
                  id="rate"
                  value="4"
                  onClick={(e) => setSelected(e.target.value)}
                />
                <label htmlFor="rate">4 Stars</label>
              </div>
              <div className={styles.rate}>
                <input
                  type="checkbox"
                  className={styles.checkbox}
                  id="rate"
                  value="3"
                  onClick={(e) => setSelected(e.target.value)}
                />
                <label htmlFor="rate">less than Stars</label>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Rating;
