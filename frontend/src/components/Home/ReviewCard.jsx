"use client";
import Image from "next/image";
import React, { useState } from "react";
import styles from "./styles/reviewcard.module.css";
import cuisine from "./assets/cuisine.jpg";
import dish from "./assets/dish.jpg";
import { AiOutlineLike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";

function ReviewCard() {
  const [like, setLike] = useState(true);

  const handleLike = (e) => {
    e.preventDefault();
    setLike(!like);
  };

  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image src={cuisine} className={styles.avatar} />
        <div className={styles.userinfo}>
          <h3 className={styles.name}>John Dyke</h3>
          <p>Added 2 photos</p>
        </div>
      </div>
      <p className={styles.restaurantName}>Pinochio Restaurant</p>
      <div className={styles.post}>
        <div className={styles.images}>
          <Image src={cuisine} className={styles.upload} alt="cusine" />
          <Image src={dish} className={styles.upload} />
        </div>
        <button
          type="button"
          onClick={(e) => handleLike(e)}
          className={styles.likeButton}
        >
          {like ? <AiOutlineLike /> : <AiFillLike />}
        </button>
      </div>
    </div>
  );
}

export default ReviewCard;
