import React from "react";
import {HStack, Stack} from "@chakra-ui/react";

import type {Review} from "../../../product/types";

import AverageFromReviews from "./AverageFromReviews";
import AmountBar from "./AmountBar";

type ReviewsChartProps = {
  reviews: Review[];
};

const ReviewsChart = ({reviews}: ReviewsChartProps) => {
  const reviewsQuantity = reviews.length;
  const reviewsRating =
    reviews.reduce(function (sum: number, review: Review) {
      return sum + review.rating;
    }, 0) / reviewsQuantity;
  const filterQuantity = (value: number) => {
    let filtered = reviews.filter((review) => review.rating === value);

    // TODO Optimize this
    return filtered.length;
  };

  return (
    <HStack alignItems="center">
      <AverageFromReviews quantity={reviewsQuantity} rating={reviewsRating} />
      <Stack spacing={1}>
        {Array(5)
          .fill("")
          .map((_, i) => (
            <AmountBar
              key={i}
              label={i === 0 ? `1 estrella` : `${i + 1} estrellas`}
              percentage={(filterQuantity(i + 1) / reviewsQuantity) * 100}
              quantity={filterQuantity(i + 1)}
            />
          ))
          .reverse()}
      </Stack>
    </HStack>
  );
};

export default ReviewsChart;
