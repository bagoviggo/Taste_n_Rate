import React from "react";
import styles from "./review.module.css";

function Review() {
  return (
    <div className={styles.review}>
      <h1 className={styles.title}>Review</h1>
      <div className={styles.review_form}>
        <form action="POST">
          <div>
            <h2>SHARE YOUR OPINION WITH US</h2>
          </div>
          <div className={styles.form_group}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" className={styles.form_control} />
          </div>
          <div className={styles.form_group_upload}>
            <input
              id="imageUpload"
              type="file"
              multiple
              accept=".jpg, .png"
              className={styles.imageUpload}
            />
            <button type="button">
              <label htmlFor="imageUpload">Upload Images</label>
            </button>
          </div>
          <div className={styles.form_group}>
            <label htmlFor="rating">Rating</label>
            <select id="rating" className={styles.form_control} required>
              <option value="1">1 - Poor</option>
              <option value="2">2 - Fair</option>
              <option value="3">3 - Good</option>
              <option value="4">4 - Very Good</option>
              <option value="5">5 - Excellent</option>
            </select>
          </div>
          <div className={styles.form_group}>
            <label htmlFor="review">Write a review</label>
            <textarea
              id="review"
              className={styles.form_control}
              required
            ></textarea>
          </div>
          <button type="button" className={styles.btn_primary}>
            Post Review
          </button>
        </form>
      </div>
    </div>
  );
}

export default Review;
