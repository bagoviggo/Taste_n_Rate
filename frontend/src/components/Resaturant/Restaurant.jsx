"use client";
import React, { useState } from "react";
import styles from "./styles/restaurant.module.css";
import Filters from "./Filter/Filters";
import RestaurantCard from "./RestaurantCard";

function Restaurants() {
  const [numCards, setNumCards] = useState(3);

  function showMore() {
    setNumCards(numCards + 3);
  }

  return (
    <>
      <div className={styles.main_content}>
        <div className={styles.restaurant_container}>
          <div className={styles.heading}>
            <h1>The Best Restaurants in Taihuang</h1>
          </div>
          <Filters />
          <div className={styles.restaurant_cards}>
            <div className={styles.restaurant_unit}>
              {Array.from({ length: numCards }, (_, index) => (
                <RestaurantCard key={index} />
              ))}
            </div>
            <button onClick={showMore}>Show more posts</button>
          </div>
        </div>
        <div className={styles.map}>
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.905672132381!2d120.6465203149844!3d24.15516498439843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a9f6f6a3f1a5%3A0x8b0c5e6b3b3c6b5b!2z5Y-w5YyX5biC5p2x5Y2A5aSn5a24!5e0!3m2!1szh-TW!2stw!4v1623666375841!5m2!1szh-TW!2stw"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen="false"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default Restaurants;
