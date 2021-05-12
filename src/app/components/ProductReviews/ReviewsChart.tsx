import React from "react";
import {HStack, Text} from "@chakra-ui/react";

import type {Review} from "../../../product/types";

import Stars from "./Stars";

type ReviewsChartProps = {
  reviews: Review[];
};

const ReviewsChart = ({reviews}: ReviewsChartProps) => {
  const reviewsQuantity = reviews.length;
  const reviewsRating =
    reviews.reduce(function (sum: number, review: Review) {
      return sum + review.rating;
    }, 0) / reviewsQuantity;

  return (
    <HStack alignItems="center">
      <Stars quantity={reviewsQuantity} rating={reviewsRating} />
      <Text>Bars</Text>
    </HStack>
  );
};

export default ReviewsChart;
