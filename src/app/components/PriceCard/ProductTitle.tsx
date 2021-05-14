import React, {useState} from "react";
import {HStack, Heading, Icon, Stack, Text, StackDivider} from "@chakra-ui/react";
import {IoHeart, IoHeartOutline} from "react-icons/io5";

import Stars from "../ProductReviews/Stars";

type ProductTitleProps = {
  title: string;
  condition: string;
  sold_quantity: number;
  reviews_quantity: number;
  reviews_rating: number;
};

const ProductTitle = (props: ProductTitleProps) => {
  const {title, condition, sold_quantity, reviews_quantity, reviews_rating} = props;
  const [fav, setFav] = useState(false);

  return (
    <Stack id="heading">
      <HStack color="blackAlpha.700" divider={<StackDivider />} fontSize="smaller">
        <Text>{condition === "new" ? "Nuevo" : "Usado"}</Text>
        <Text>{sold_quantity} vendidos</Text>
      </HStack>

      <HStack alignItems="flex-start" justifyContent="space-between" spacing={6}>
        <Heading as="h1" fontSize="2xl">
          {title}
        </Heading>
        <Icon
          as={fav ? IoHeart : IoHeartOutline}
          color="secondary.500"
          cursor="pointer"
          height={7}
          width={7}
          onClick={() => setFav(!fav)}
        />
      </HStack>
      <Stars rating={reviews_rating} size={5}>
        <Text color="blackAlpha.700" fontSize="sm" pl={2}>
          {reviews_quantity === 1 ? "1 Opinión" : `${reviews_quantity} opiniones`}
        </Text>
      </Stars>
    </Stack>
  );
};

export default ProductTitle;
