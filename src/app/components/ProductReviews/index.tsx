import React from "react";
import {Heading, Stack} from "@chakra-ui/react";

import {Review} from "../../../product/types";

import ReviewsChart from "./ReviewsChart";

type ProductReviewsProps = {
  reviews: Review[];
};
const ProductReviews = ({reviews}: ProductReviewsProps) => (
  <Stack spacing={8}>
    <Heading as="h3" variant="thin_gray">
      Opiniones sobre el producto
    </Heading>

    <ReviewsChart reviews={reviews} />
  </Stack>
);

export default ProductReviews;
