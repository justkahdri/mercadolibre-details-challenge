import React from "react";
import {Text, HStack, StackDivider} from "@chakra-ui/react";

type ConditionProps = {
  condition: string;
  sold_quantity: number;
};

const Condition = ({condition, sold_quantity}: ConditionProps) => (
  <HStack color="blackAlpha.700" divider={<StackDivider />} fontSize="smaller">
    <Text>{condition === "new" ? "Nuevo" : "Usado"}</Text>
    <Text>{sold_quantity} vendidos</Text>
  </HStack>
);

export default Condition;
