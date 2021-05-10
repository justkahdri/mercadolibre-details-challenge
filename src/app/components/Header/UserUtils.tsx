import React from "react";
import {HStack, Icon, Text} from "@chakra-ui/react";
import {CgShoppingCart} from "react-icons/cg";

const UserUtils = () => (
  <HStack alignItems="center" color="grey.300" fontSize="sm" spacing={5}>
    <Text>Creá tu Cuenta</Text>
    <Text>Ingresá</Text>
    <Text>Mis Compras</Text>
    <Icon as={CgShoppingCart} height={5} width={5} />
  </HStack>
);

export default UserUtils;
