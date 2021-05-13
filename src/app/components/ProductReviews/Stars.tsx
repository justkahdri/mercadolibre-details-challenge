import React from "react";
import {Icon, HStack} from "@chakra-ui/react";
import {AiFillStar, AiOutlineStar} from "react-icons/ai";

type Props = {
  rating: number;
  size: number;
};

const Stars = ({rating, size}: Props) => (
  <HStack spacing={1}>
    {Array(5)
      .fill("")
      .map((_, i) =>
        i + 1 < rating ? (
          <Icon key={i} as={AiFillStar} color="secondary.500" height={size} width={size} />
        ) : (
          <Icon key={i} as={AiOutlineStar} color="gray.300" height={size} width={size} />
        ),
      )}{" "}
  </HStack>
);

export default Stars;
