import React from "react";
import { reviewData } from "./ReviewData";

import "./review.css";
export default function Review() {
  return (
    <>
      <div className="review-main-wrap">
        <h1>Review from our customers🫣 </h1>
        <div className="review-wrap">
          {reviewData.map((items) => (
            <div className="review-slider">
              <h3>"{items.message}"</h3>
              <div className="review-text-wrap">
                <p>-{items.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
