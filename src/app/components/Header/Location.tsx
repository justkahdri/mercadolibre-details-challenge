import React from "react";
import {HStack, Icon, Stack, Text} from "@chakra-ui/react";
import {GoLocation} from "react-icons/go";

const Location = () => (
  <HStack alignItems="center" p={2} spacing={1} textAlign="left">
    <Icon as={GoLocation} color="blackAlpha.800" height={"100%"} width={5} />
    <Stack spacing={0}>
      <Text color="blackAlpha.600" fontSize="smaller" lineHeight="90%">
        Enviar a
      </Text>
      <Text color="blackAlpha.800" fontSize="sm" lineHeight="90%">
        Buenos Aires 1200
      </Text>
    </Stack>
  </HStack>
);

export default Location;
