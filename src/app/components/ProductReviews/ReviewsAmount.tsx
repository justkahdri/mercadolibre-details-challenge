import React from "react";
import {Text, Progress, HStack} from "@chakra-ui/react";

type Props = {
  label: string;
  quantity: number;
  percentage: number;
};

const ReviewsAmount = ({label, quantity, percentage}: Props) => (
  <HStack color="blackAlpha.600" margin="auto">
    <Text>{label}</Text>
    <Progress colorScheme="secondary" rounded="md" size="xs" value={percentage} width={108} />
    <Text>{quantity}</Text>
  </HStack>
);

export default ReviewsAmount;
