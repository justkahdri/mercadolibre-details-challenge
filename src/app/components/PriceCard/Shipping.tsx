import React from "react";
import {Stack, Text, Icon, HStack} from "@chakra-ui/react";
import {FaShippingFast} from "react-icons/fa";

const Shipping = () => (
  <Stack color="blackAlpha.600" fontSize="sm" id="shipping" lineHeight="100%">
    <HStack alignItems="center">
      <Icon as={FaShippingFast} color="green.400" height={5} width={5} />
      <Text color="green.400" fontSize="md">
        Llega gratis{" "}
        <Text as="span" fontWeight={500}>
          {new Date().getHours() < 13 ? "hoy" : "mañana"}
        </Text>
      </Text>
    </HStack>

    <Text pl="28px">Solo en CABA y zonas de GBA</Text>
    <Text pl="28px">Beneficio Mercado Puntos</Text>
    <Text color="secondary.400" pl="28px">
      Ver más formas de entrega
    </Text>
  </Stack>
);

export default Shipping;
