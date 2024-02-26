import { Carousel } from "antd";
import React from "react";
import styles from "./styles/landing.module.css";
import cuisine from "./assets/cuisine.jpg";
import dish from "./assets/dish.jpg";
import restaurant from "./assets/restaurant.jpg";
import plate from "./assets/foodplate.jpg";
import Image from "next/image";

function Landing() {
  return (
    <>
      <Carousel autoplay>
        <div className={styles.imageContainer}>
          <Image src={restaurant} alt="" />
          <div className={styles.content}>
            <h1 className={styles.contentHeading}>
              Taste and rate the best meals in the world.
            </h1>
            <button type="button" className={styles.button}>
              Write a Review
            </button>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src={cuisine} alt="" />
          <div className={styles.content}>
            <h1 className={styles.contentHeading}>
              Your opinion matters to others.
            </h1>
            <button type="button" className={styles.button}>
              Write a Review
            </button>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src={plate} alt="" />
          <div className={styles.content}>
            <h1 className={styles.contentHeading}>
              Your rating can help others to find the best meal.
            </h1>
            <button type="button" className={styles.button}>
              Write a Review
            </button>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src={dish} alt="" />
          <div className={styles.content}>
            <h1 className={styles.contentHeading}>
              Eat and leave a rate for your meal.
            </h1>
            <button type="button" className={styles.button}>
              Write a Review
            </button>
          </div>
        </div>
      </Carousel>
    </>
  );
}

export default Landing;
