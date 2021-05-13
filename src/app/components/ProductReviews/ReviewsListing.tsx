import React, {useState} from "react";
import {Button, HStack, Link, Stack, StackDivider} from "@chakra-ui/react";

import {Review} from "../../../product/types";

import ReviewItem from "./ReviewItem";

type Props = {
  reviews: Review[];
};

const ReviewsListing = ({reviews}: Props) => {
  const [filteredReviews, setFilteredReviews] = useState(reviews);

  const filterReviews = (filter?: string) => {
    let filteredReviews = reviews;

    switch (filter) {
      case "positive": {
        filteredReviews = reviews.filter((review) => review.rating > 3);
        break;
      }
      case "negative": {
        filteredReviews = reviews.filter((review) => review.rating < 3);
        break;
      }
    }

    setFilteredReviews(filteredReviews.slice(0, 5));
  };

  return (
    <Stack spacing={8}>
      <HStack>
        <Button colorScheme="secondary" flex={1} variant="ghost" onClick={() => filterReviews()}>
          Todas
        </Button>
        <Button
          colorScheme="secondary"
          flex={1}
          variant="ghost"
          onClick={() => filterReviews("positive")}
        >
          Positivas
        </Button>
        <Button
          colorScheme="secondary"
          flex={1}
          variant="ghost"
          onClick={() => filterReviews("negative")}
        >
          Negativas
        </Button>
      </HStack>

      {filteredReviews.map((review) => (
        <ReviewItem key={review.id} {...review} />
      ))}
      {filteredReviews.length !== reviews.length && (
        <Link color="secondary.500" fontSize="sm">
          Ver todas las opiniones
        </Link>
      )}
    </Stack>
  );
};

export default ReviewsListing;
