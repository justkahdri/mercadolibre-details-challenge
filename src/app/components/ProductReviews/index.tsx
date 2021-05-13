import React from "react";
import {Heading, Stack} from "@chakra-ui/react";

import {Review} from "../../../product/types";

import ReviewsChart from "./ReviewsChart";
import ReviewsListing from "./ReviewsListing";

type ProductReviewsProps = {
  reviews: Review[];
};
const ProductReviews = ({reviews}: ProductReviewsProps) => (
  <Stack pb={10} spacing={10}>
    <Heading as="h3" variant="thin_gray">
      Opiniones sobre el producto
    </Heading>

    <ReviewsChart reviews={reviews} />

    <ReviewsListing reviews={reviews} />
  </Stack>
);

export default ProductReviews;
