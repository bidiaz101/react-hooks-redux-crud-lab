import React from "react";
import Review from "./Review";

function Reviews({ reviews }) {
  const reviewList = reviews.map(review => {
    return <Review key={review.id} review={review} />
  })
  return <ul>{reviewList}</ul>;
}

export default Reviews;
