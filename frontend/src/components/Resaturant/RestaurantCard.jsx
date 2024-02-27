import React from "react";
import { LiaStarSolid } from "react-icons/lia";
import { MdOutlineEventSeat } from "react-icons/md";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { MdOutlineTakeoutDining } from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5";

import styles from "./styles/rescard.module.css";

function RestaurantCard() {
  function handleClick(e) {
    e.preventDefault();
    window.location.href = "/single_restaurant";
  }
  return (
    <>
      <div className={styles.restaurant_card} onClick={(e) => handleClick(e)}>
        <div className={styles.restaurant_img}>
          <img
            src="https://images.unsplash.com/photo-1617196035154-1e7e6e28b0db?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="restaurant"
          />
        </div>
        <div className={styles.restaurant_info}>
          <h1>Marakami Rugen</h1>
          <p>
            <LiaStarSolid className={styles.star} />
            <LiaStarSolid className={styles.star} />
            <LiaStarSolid className={styles.star} />
            <LiaStarSolid className={styles.star} />
            (from 1.2k reviews)
          </p>
          <p>
            <strong>Location: </strong>Jungle Town
          </p>
          <div className={styles.features_container}>
            <p>
              <strong>Features:</strong>
            </p>
            <div className={styles.features}>
              <p>
                <MdOutlineEventSeat className={styles.icons} /> Outdoor
              </p>
              <p>
                <MdOutlineDeliveryDining className={styles.icons} />
                Delivery
              </p>
              <p>
                <MdOutlineTakeoutDining className={styles.icons} />
                Takeaway
              </p>
            </div>
          </div>
          <p>
            <IoTimeOutline className={styles.icons} />
            <strong>Open Hours: </strong> 10am - 8pm
          </p>
        </div>
      </div>
    </>
  );
}

export default RestaurantCard;
