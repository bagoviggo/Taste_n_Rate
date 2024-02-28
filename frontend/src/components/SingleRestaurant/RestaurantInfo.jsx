import React from "react";
import styles from "./restaurantinfo.module.css";
import { Carousel } from "antd";
import dish1 from "./assets/dish1.jpg";
import dish2 from "./assets/dish2.jpg";
import dish3 from "./assets/dish3.jpg";
import opentime from "./assets/open_hours.svg";
import Image from "next/image";
import {
  MdOutlineDeliveryDining,
  MdOutlineEventSeat,
  MdOutlineTakeoutDining,
} from "react-icons/md";
import { LiaStarSolid } from "react-icons/lia";
import { IoTimeOutline } from "react-icons/io5";
import { FaWineGlassAlt } from "react-icons/fa";
import { IoIosBeer } from "react-icons/io";
import { FaGlassWaterDroplet } from "react-icons/fa6";
import { GiWaterBottle } from "react-icons/gi";
import { TbSalad } from "react-icons/tb";
import { GiSteak } from "react-icons/gi";
import { PiHamburgerBold } from "react-icons/pi";
import { GiSadCrab } from "react-icons/gi";

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
        <div className={styles.imageContainer}>
          <Image src={dish2} alt="dish" />
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
        <div className={styles.imageContainer}>
          <Image src={dish3} alt="dish" />
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
      <div className={styles.restaurant_details}>
        <h2>Restaurant Details</h2>
        <div className={styles.opening_info}>
          <div>
            <h3>Opening Hours</h3>
            <p>Monday: 10am - 8pm</p>
            <p>Tuesday: 10am - 8pm</p>
            <p>Wednesday: 10am - 8pm</p>
            <p>Thursday: 10am - 8pm</p>
            <p>Friday: 10am - 8pm</p>
            <p>Saturday: 10am - 8pm</p>
            <p>Sunday: 10am - 8pm</p>
          </div>
          <div className={styles.opentime}>
            <Image src={opentime} alt="open hours" />
          </div>
        </div>
        <h3>Drinks</h3>
        <div className={styles.drinks}>
          <div className={styles.drink}>
            <FaWineGlassAlt className={styles.menu_icon} />
            <p>Wine</p>
          </div>
          <div className={styles.drink}>
            <IoIosBeer className={styles.menu_icon} />
            <p>Beer</p>
          </div>
          <div className={styles.drink}>
            <GiWaterBottle className={styles.menu_icon} />
            <p>Soft Drinks</p>
          </div>
          <div className={styles.drink}>
            <FaGlassWaterDroplet className={styles.menu_icon} />
            <p>Water</p>
          </div>
        </div>
        <h3>Foods</h3>
        <div className={styles.foods}>
          <div className={styles.food}>
            <TbSalad className={styles.menu_icon} />
            <p>Salad</p>
          </div>
          <div className={styles.food}>
            <GiSteak className={styles.menu_icon} />
            <p>Steak</p>
          </div>
          <div className={styles.food}>
            <PiHamburgerBold className={styles.menu_icon} />
            <p>Hamburger</p>
          </div>
          <div className={styles.food}>
            <GiSadCrab className={styles.menu_icon} />
            <p>Sea Food</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default RestaurantInfo;
