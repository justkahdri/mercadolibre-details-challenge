import React from "react";
import {HStack, Text, StackProps, Icon} from "@chakra-ui/react";
import {MdKeyboardArrowDown} from "react-icons/md";

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
    <Text>
      Categorias <Icon as={MdKeyboardArrowDown} />
    </Text>
    <Text>Ofertas</Text>
    <Text>Historial</Text>
    <Text>Supermercado</Text>
    <Text>Moda</Text>
    <Text>Vender</Text>
    <Text>Ayuda</Text>
  </HStack>
);

export default NavBar;
