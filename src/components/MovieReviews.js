// Code MovieReviews Here
import React from "react";

export default function MovieReviews({ reviews }) {
  return (
    <ul className="review-list">
      {reviews.map((review, idx) => (
        <li key={"review" + idx} className="review">
          {review.summary_short}
        </li>
      ))}
    </ul>
  );
}
