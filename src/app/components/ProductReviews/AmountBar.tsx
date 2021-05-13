import React from "react";
import {Text, Progress, HStack} from "@chakra-ui/react";

type Props = {
  label: string;
  quantity: number;
  percentage: number;
};

const AmountBar = ({label, quantity, percentage}: Props) => (
  <HStack color="blackAlpha.600" width="280px">
    <Text flex={2} textAlign="right">
      {label}
    </Text>
    <Progress colorScheme="secondary" rounded="md" size="xs" value={percentage} width={108} />
    <Text flex={1} maxWidth="25px" textAlign="center">
      {quantity}
    </Text>
  </HStack>
);

export default AmountBar;
