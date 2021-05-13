import React from "react";
import {Text, Stack, Heading} from "@chakra-ui/react";

import Stars from "./Stars";

type Props = {
  rating: number;
  quantity: number;
};

const AverageFromReviews = ({rating, quantity}: Props) => (
  <Stack alignItems="flex-end" spacing={0} textAlign="right">
    <Heading as="h5" color="blackAlpha.800" fontSize="6xl" fontWeight={300}>
      {rating}
    </Heading>
    <Stars rating={rating} size={7} />
    <Text color="blackAlpha.600" fontSize="sm" lineHeight="200%">
      {quantity === 1 ? "1 Opinión" : `Promedio entre ${quantity} opiniones`}
    </Text>
  </Stack>
);

export default AverageFromReviews;
