"use client";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import styles from "./styles/menu.module.css";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Restaurants");

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  function handleSearch() {
    switch (selected) {
      case "Delivery":
        window.location.href = "/delivery";
        break;
      default:
        window.location.href = "/restaurants";
        break;
    }
  }

  return (
    <div className={styles.menubar}>
      <a href="/restaurants">Restaurants</a>
      <div className={styles.filter}>
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
                <a href="/restaurants">
                  <option
                    defaultValue="Restaurants"
                    onMouseEnter={(e) => setSelected(e.target.value)}
                    onMouseLeave={() => setSelected(null)}
                  >
                    Restaurants
                  </option>
                </a>
                <a href="/delivery">
                  <option
                    value="Delivery"
                    onMouseEnter={(e) => setSelected(e.target.value)}
                    onMouseLeave={() => setSelected(null)}
                  >
                    Delivery
                  </option>
                </a>
              </div>
            )}
          </div>
        </div>
        <select
          name="location"
          id="location"
          className={styles.location}
          defaultValue="location1"
        >
          <option value="location2">Location 2</option>
          <option value="location3">Location 3</option>
          <option value="location4">Location 4</option>
        </select>
        <button
          type="button"
          className={styles.searchicon}
          onClick={handleSearch}
        >
          <FaSearch />
        </button>
      </div>
    </div>
  );
}
