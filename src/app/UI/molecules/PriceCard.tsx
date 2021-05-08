import React from "react";
import {Box, Badge, Text, Icon, Stack, HStack, StackDivider, Heading} from "@chakra-ui/react";
import {AiFillStar, AiOutlineStar} from "react-icons/ai";
import {FiHeart} from "react-icons/fi";

import {Product} from "../../../product/types";

const PriceCard: React.FC<Product> = (props) => (
  <Stack borderRadius="lg" borderWidth="1px" px={4} py={5}>
    <HStack color="blackAlpha.700" divider={<StackDivider />} fontSize="smaller">
      <Text>{props.condition === "new" ? "Nuevo" : "Usado"}</Text>
      <Text>{props.sold_quantity} vendidos</Text>
    </HStack>

    <HStack alignItems="flex-start" justifyContent="space-between" spacing={6}>
      <Heading as="h1" fontSize="2xl">
        {props.title}
      </Heading>
      <Icon as={FiHeart} color="blue.500" height={6} width={6} />
    </HStack>

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

    <Text fontSize="3xl">
      {props.currency_id === "ARS" ? "$" : "USD"} {props.price}
      <Box as="span" color="gray.600" fontSize="sm">
        {}
      </Box>
    </Text>
  </Stack>
);

export default PriceCard;
