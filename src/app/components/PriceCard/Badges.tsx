import React from "react";
import {Stack, HStack, Icon, Text} from "@chakra-ui/react";
import {HiOutlineShieldCheck} from "react-icons/hi";
import {BiTrophy} from "react-icons/bi";

const Badges = () => (
  <Stack alignItems="flex-start" color="blackAlpha.600" fontSize="sm" id="badges" lineHeight="120%">
    <HStack alignItems="flex-start">
      <Icon as={HiOutlineShieldCheck} height={4} width={4} />
      <Text>
        <Text as="span" color="secondary.400">
          Compra Protegida
        </Text>
        , recibí el producto que esperabas o te devolvemos tu dinero.
      </Text>
    </HStack>
    <HStack alignItems="flex-start">
      <Icon as={BiTrophy} height={4} width={4} />
      <Text>
        <Text as="span" color="secondary.400">
          Mercado Puntos
        </Text>
        . Sumás 139 puntos.
      </Text>
    </HStack>
  </Stack>
);

export default Badges;
