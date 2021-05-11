import React from "react";
import {Box, Text, Icon, HStack} from "@chakra-ui/react";
import {AiFillStar, AiOutlineStar} from "react-icons/ai";

const Stars = () => (
  <HStack>
    <Box d="flex">
      {Array(5)
        .fill("")
        .map((_, i) =>
          i < 4 ? (
            <Icon key={i} as={AiFillStar} color="blue.500" />
          ) : (
            <Icon key={i} as={AiOutlineStar} color="gray.300" />
          ),
        )}{" "}
    </Box>
    <Text color="blackAlpha.700" fontSize="sm">
      5 opiniones
    </Text>
  </HStack>
);

export default Stars;
