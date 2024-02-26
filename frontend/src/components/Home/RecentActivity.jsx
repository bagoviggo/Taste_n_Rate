"use client";
import React, { useState } from "react";
import ReviewCard from "./ReviewCard";
import styles from "./styles/recent_actvity.module.css";

function RecentActivity() {
  const [numCards, setNumCards] = useState(3);

  function showMore() {
    setNumCards(numCards + 3);
  }

  return (
    <div className={styles.recent}>
      <h2>Recent Activities</h2>
      <div className={styles.userpost}>
        {Array.from({ length: numCards }, (_, index) => (
          <ReviewCard key={index} />
        ))}
      </div>
      <button onClick={showMore}>Show more posts</button>
    </div>
  );
}

export default RecentActivity;
