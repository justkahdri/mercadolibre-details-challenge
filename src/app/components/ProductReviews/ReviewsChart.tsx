import React from "react";
import {HStack, Stack} from "@chakra-ui/react";

import type {Review} from "../../../product/types";

import AverageFromReviews from "./AverageFromReviews";
import ReviewsAmount from "./ReviewsAmount";

type ReviewsChartProps = {
  reviews: Review[];
};

const ReviewsChart = ({reviews}: ReviewsChartProps) => {
  const reviewsQuantity = reviews.length;
  const reviewsRating =
    reviews.reduce(function (sum: number, review: Review) {
      return sum + review.rating;
    }, 0) / reviewsQuantity;
  const sorted = (value: number) => {
    let filtered = reviews.filter((review) => review.rating === value);

    return filtered.length;
  };

  return (
    <HStack alignItems="center" spacing={16}>
      <AverageFromReviews quantity={reviewsQuantity} rating={reviewsRating} />
      <Stack spacing={0}>
        {Array(5)
          .fill("")
          .map((_, i) => (
            <ReviewsAmount
              key={i}
              label={i === 0 ? `1 estrella` : `${i + 1} estrellas`}
              percentage={(sorted(i + 1) / reviewsQuantity) * 100}
              quantity={sorted(i + 1)}
            />
          ))}
      </Stack>
    </HStack>
  );
};

export default ReviewsChart;
