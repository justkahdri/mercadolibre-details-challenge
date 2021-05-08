import React from "react";
import {HStack, Icon, Stack, Text} from "@chakra-ui/react";
import {GoLocation} from "react-icons/go";

const Location = () => (
  <HStack alignItems="center" spacing={1}>
    <Icon as={GoLocation} color="blackAlpha.800" height={"100%"} width={5} />
    <Stack spacing={0}>
      <Text color="blackAlpha.700" fontSize="smaller" lineHeight="normal">
        Enviar a
      </Text>
      <Text color="blackAlpha.800" fontSize="sm" lineHeight="normal">
        Buenos Aires 1200
      </Text>
    </Stack>
  </HStack>
);

export default Location;
