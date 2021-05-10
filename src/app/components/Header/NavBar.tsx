import {HStack, Text, StackProps} from "@chakra-ui/layout";
import React from "react";

const NavBar = (props: StackProps) => (
  <HStack
    alignItems="flex-end"
    color="blackAlpha.600"
    fontSize="sm"
    height={"100%"}
    lineHeight="normal"
    spacing={4}
    {...props}
  >
    <Text>Categorias</Text>
    <Text>Ofertas</Text>
    <Text>Historial</Text>
    <Text>Supermercado</Text>
    <Text>Moda</Text>
    <Text>Vender</Text>
    <Text>Ayuda</Text>
  </HStack>
);

export default NavBar;
