import React from "react";
import {Icon, Stack, Text, Box} from "@chakra-ui/react";
import {RiCheckboxCircleFill} from "react-icons/ri";

type Props =
  | {
      quantity: number;
      description: string;
      icon?: undefined;
    }
  | {
      quantity?: undefined;
      icon: any;
      description: string;
    };

const SellerStat = ({icon, quantity, description}: Props) => (
  <Stack alignItems="center" flex={1} textAlign="center">
    {icon ? (
      <Box position="relative">
        <Icon as={icon} height={6} width={6} />
        <Icon
          as={RiCheckboxCircleFill}
          color="green.400"
          height={4}
          left={4}
          position="absolute"
          top={3}
          width={4}
          zIndex={2}
        />
      </Box>
    ) : (
      <Text fontSize="2xl" lineHeight="100%">
        {quantity}
      </Text>
    )}

    <Text as="small" color="blackAlpha.700" fontSize="xs" lineHeight="95%">
      {description}
    </Text>
  </Stack>
);

export default SellerStat;
