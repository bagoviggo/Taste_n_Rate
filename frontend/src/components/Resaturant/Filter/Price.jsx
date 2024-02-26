import React, { useState } from "react";
import styles from "./styles/price.module.css";

function Price() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("All Prices");

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <div></div>
      <div className={styles.search}>
        <input
          type="text"
          value={selected}
          placeholder="Search..."
          onClick={toggleDropdown}
        />
        <div>
          {isOpen && (
            <div className={styles.dropdown}>
              <option defaultValue="All Prices">All</option>
              <option value="$" onClick={(e) => setSelected(e.target.value)}>
                $
              </option>
              <option value="$$" onClick={(e) => setSelected(e.target.value)}>
                $$
              </option>
              <option value="$$$" onClick={(e) => setSelected(e.target.value)}>
                $$$
              </option>
              <option
                value="$$$$"
                onClick={(e) => setSelected(e.target.value)}
                // onMouseEnter={(e) => setSelected(e.target.value)}
                // onMouseLeave={() => setSelected(null)}
              >
                $$$$
              </option>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Price;
