import React from "react";
import {Stack, Text, HStack, Icon} from "@chakra-ui/react";
import {IoReturnDownBackOutline} from "react-icons/io5";

const Refund = () => (
  <Stack color="blackAlpha.600" fontSize="sm" id="refund" lineHeight="100%">
    <HStack alignItems="center">
      <Icon as={IoReturnDownBackOutline} color="green.400" height={6} width={5} />
      <Text color="green.400" fontSize="md">
        Devolución Gratis
      </Text>
    </HStack>

    <Text pl="28px">Tenés 30 días desde que lo recibís.</Text>
    <Text color="secondary.400" pl="28px">
      Conocer más
    </Text>
  </Stack>
);

export default Refund;
