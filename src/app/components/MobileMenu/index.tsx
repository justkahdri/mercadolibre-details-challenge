import React from "react";
import {Heading, Link, Flex, Stack, StackDivider} from "@chakra-ui/react";

const MobileMenu = () => {
  return (
    <Stack divider={<StackDivider />}>
      <Heading>Bienvenido</Heading>
      <Flex className="navigation" direction="column">
        <Link bgColor="blackAlpha.200" width="100%">
          Inicio
        </Link>
        <Link width="100%">Inicio</Link>
        <Link width="100%">Inicio</Link>
      </Flex>
    </Stack>
  );
};

export default MobileMenu;
