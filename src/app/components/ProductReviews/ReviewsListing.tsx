import React from "react";
import {Button, HStack, Stack} from "@chakra-ui/react";

import {Review} from "../../../product/types";

import ReviewItem from "./ReviewItem";

type Props = {
  reviews: Review[];
};

const ReviewsListing = ({reviews}: Props) => {
  return (
    <Stack spacing={8}>
      <HStack>
        <Button>Todas</Button>
        <Button>Positivas</Button>
        <Button>Negativas</Button>
      </HStack>

      {reviews.slice(0, 5).map((review) => (
        <ReviewItem key={review.id} {...review} />
      ))}
    </Stack>
  );
};

export default ReviewsListing;
