import React from "react";
import styles from "./restaurantinfo.module.css";
import { Carousel } from "antd";
import dish1 from "./assets/dish1.jpg";
import dish2 from "./assets/dish2.jpg";
import dish3 from "./assets/dish3.jpg";
import Image from "next/image";
import {
  MdOutlineDeliveryDining,
  MdOutlineEventSeat,
  MdOutlineTakeoutDining,
} from "react-icons/md";
import { LiaStarSolid } from "react-icons/lia";
import { IoTimeOutline } from "react-icons/io5";

function RestaurantInfo() {
  return (
    <>
      <Carousel autoplay>
        <div className={styles.imageContainer}>
          <Image src={dish1} alt="dish" />
          <div className={styles.content}>
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
            <a href="/review">
              <button type="button" className={styles.button}>
                Write a Review
              </button>
            </a>
          </div>
        </div>
      </Carousel>
    </>
  );
}

export default RestaurantInfo;
