import React from "react";
import {Box, Text, Icon, HStack} from "@chakra-ui/react";
import {AiFillStar, AiOutlineStar} from "react-icons/ai";

type StarsProps = {
  rating: number;
  quantity: number;
};

const Stars = ({rating, quantity}: StarsProps) => (
  <HStack>
    <Box d="flex">
      {Array(5)
        .fill("")
        .map((_, i) =>
          i + 1 <= rating ? (
            <Icon key={i} as={AiFillStar} color="secondary.500" />
          ) : (
            <Icon key={i} as={AiOutlineStar} color="gray.300" />
          ),
        )}{" "}
    </Box>
    <Text color="blackAlpha.700" fontSize="sm">
      {quantity === 1 ? "1 Opinión" : `${quantity} opiniones`}
    </Text>
  </HStack>
);

export default Stars;
