import React from "react";
import styles from "./styles/category.module.css";
import { MdOutlineFoodBank } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { IoFastFoodOutline } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

function Category() {
  return (
    <div className={styles.category}>
      <h2>Categories</h2>
      <div className={styles.categoryContainer}>
        <div className={styles.categoryCard}>
          <MdOutlineFoodBank className={styles.cardicon} />
          <a href="/restaurants">Restaurants</a>
        </div>
        <div className={styles.categoryCard}>
          <TbTruckDelivery className={styles.cardicon} />
          <a href="/delivery">Delivery</a>
        </div>
        <div className={styles.categoryCard}>
          <GiFoodTruck className={styles.cardicon} />
          <a href="/restaurants">Fast Food</a>
        </div>
        <div className={styles.categoryCard}>
          <IoFastFoodOutline className={styles.cardicon} />
          <a href="/restaurants">Beverage</a>
        </div>
      </div>
    </div>
  );
}

export default Category;
