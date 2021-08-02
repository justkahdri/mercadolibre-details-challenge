import React from "react";
import {HStack, Text} from "@chakra-ui/react";

import Cart from "./Cart";

const UserUtils = () => (
  <HStack alignItems="center" color="grey.300" fontSize="sm" spacing={5}>
    <Text>Creá tu Cuenta</Text>
    <Text>Ingresá</Text>
    <Text>Mis Compras</Text>
    <Cart />
  </HStack>
);

export default UserUtils;
