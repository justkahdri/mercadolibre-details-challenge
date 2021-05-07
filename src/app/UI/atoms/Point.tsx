import React from "react";
import {Stack, Icon, Text, StackProps} from "@chakra-ui/react";
import {FiPrinter} from "react-icons/fi";

const Point = (props: StackProps) => (
  <Stack alignItems="center" color="grey.300" direction="row" {...props}>
    <Icon as={FiPrinter} height={8} width={8} />
    <Text fontSize="lg" fontWeight={400}>
      Comprá tu Point a $189
    </Text>
  </Stack>
);

export default Point;
