import React from "react";
import {Container, Stack, HStack, Box, Image, Tooltip} from "@chakra-ui/react";

import logo from "../../../assets/logo.png";

import Search from "./Search";
import Point from "./Point";
import Location from "./Location";
import NavBar from "./NavBar";
import UserUtils from "./UserUtils";

const Header = () => (
  <Box bg="primary.500" boxShadow="sm" py={2}>
    <Container alignSelf="center" maxWidth="container.xl" paddingX={0}>
      <Stack spacing={3}>
        <HStack justifyContent="space-between">
          <HStack flex={1} spacing={12}>
            <Tooltip hasArrow bg="secondary.500" label="No es el verdadero MercadoLibre">
              <Image objectFit="contain" src={logo} />
            </Tooltip>
            <Search />
          </HStack>
          <Point display={{base: "none", lg: "flex"}} />
        </HStack>
        <HStack alignItems="baseline" spacing={12}>
          {/* <HStack flex={1} height="100%" spacing={12}> */}
          <Location />
          <NavBar flex={1} />
          {/* </HStack> */}

          <UserUtils />
        </HStack>
      </Stack>
    </Container>
  </Box>
);

export default Header;
