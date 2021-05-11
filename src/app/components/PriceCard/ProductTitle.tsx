import React from "react";
import {HStack, Heading, Icon} from "@chakra-ui/react";
import {FiHeart} from "react-icons/fi";

type ProductTitleProps = {
  title: string;
};

const ProductTitle = ({title}: ProductTitleProps) => (
  <HStack alignItems="flex-start" justifyContent="space-between" spacing={6}>
    <Heading as="h1" fontSize="2xl">
      {title}
    </Heading>
    <Icon as={FiHeart} color="blue.500" height={6} width={6} />
  </HStack>
);

export default ProductTitle;
