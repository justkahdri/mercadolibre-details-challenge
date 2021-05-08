import {HStack, Text} from "@chakra-ui/layout";
import React from "react";

const NavBar = () => (
  <HStack color="blackAlpha.700" fontSize="sm" lineHeight="normal" spacing={4}>
    <Text>Compras</Text>
    <Text>Ofertas</Text>
    <Text>Historial</Text>
    <Text>Supermercado</Text>
    <Text>Moda</Text>
    <Text>Vender</Text>
    <Text>Ayuda</Text>
  </HStack>
);

export default NavBar;
