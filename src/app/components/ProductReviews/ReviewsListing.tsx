import React, {useEffect, useState, useCallback} from "react";
import {Text, Link, Stack, TabList, Tabs, Tab, Icon, Flex} from "@chakra-ui/react";
import {WiStars} from "react-icons/wi";

import {Review} from "../../../product/types";

import ReviewItem from "./ReviewItem";

type Props = {
  reviews: Review[];
};

const ReviewsListing = ({reviews}: Props) => {
  const [filteredReviews, setFilteredReviews] = useState(reviews);

  const filterReviews = useCallback(
    (filter?: string) => {
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

      setFilteredReviews(filteredReviews.slice(0, 3));
    },
    [reviews],
  );

  useEffect(() => {
    filterReviews();
  }, [filterReviews]);

  return (
    <Stack minHeight="523px" spacing={8}>
      <Tabs isFitted colorScheme="secondary">
        <TabList mb="1em">
          <Tab fontWeight={500} onFocus={() => filterReviews()}>
            Todas
          </Tab>
          <Tab fontWeight={500} onFocus={() => filterReviews("positive")}>
            Positivas
          </Tab>
          <Tab fontWeight={500} onFocus={() => filterReviews("negative")}>
            Negativas
          </Tab>
        </TabList>
      </Tabs>

      {filteredReviews.length ? (
        filteredReviews.map((review) => <ReviewItem key={review.id} {...review} />)
      ) : (
        <Stack alignItems="center">
          <Flex alignItems="center" color="gray.300">
            <Icon as={WiStars} boxSize="50px" />
            <Text fontSize="40px">😶</Text>
            <Icon as={WiStars} boxSize="50px" />
          </Flex>
          <Text fontSize="lg">¡Nada por aquí!</Text>
          <Text color="blackAlpha.600">Este producto no tiene opiniones.</Text>
        </Stack>
      )}
      {filteredReviews.length !== reviews.length && (
        <Link color="secondary.500" fontSize="sm">
          Ver todas las opiniones
        </Link>
      )}
    </Stack>
  );
};

export default ReviewsListing;
