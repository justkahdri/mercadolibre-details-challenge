import React from "react";
import {Icon, Flex} from "@chakra-ui/react";
import {AiFillStar, AiOutlineStar} from "react-icons/ai";

type Props = {
  rating: number;
};

const Stars = ({rating}: Props) => (
  <Flex>
    {Array(5)
      .fill("")
      .map((_, i) =>
        i + 1 < rating ? (
          <Icon key={i} as={AiFillStar} color="secondary.500" height={7} width={7} />
        ) : (
          <Icon key={i} as={AiOutlineStar} color="gray.300" height={7} width={7} />
        ),
      )}{" "}
  </Flex>
);

export default Stars;
