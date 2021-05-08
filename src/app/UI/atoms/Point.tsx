import React from "react";
import {HStack, Icon, Text, StackProps} from "@chakra-ui/react";
import {FiPrinter} from "react-icons/fi";

const Point = (props: StackProps) => (
  <HStack alignItems="center" color="grey.300" {...props}>
    <Icon as={FiPrinter} height={8} width={8} />
    <Text fontSize="lg" fontWeight={400}>
      Comprá tu Point a $189
    </Text>
  </HStack>
);

export default Point;
