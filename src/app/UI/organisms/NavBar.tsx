import React from "react";
import {Container, Stack, Flex, Box, Image, Text} from "@chakra-ui/react";

import logo from "../../../assets/logo.png";
import Search from "../atoms/Search";
import Point from "../atoms/Point";

const NavBar = () => (
  <Box bg="primary.500" boxShadow="sm" py={2}>
    <Container alignSelf="center" maxWidth="container.xl" paddingX={0}>
      <Stack>
        <Flex direction="row" justifyContent="space-between">
          <Stack direction="row" flex={1} spacing={12}>
            <Image objectFit="contain" src={logo} />
            <Search />
          </Stack>
          <Point display={{base: "none", lg: "flex"}} />
        </Flex>
        <Stack direction="row">
          <Text>Enviar a Buenos Aires 1200</Text>
        </Stack>
      </Stack>
    </Container>
  </Box>
);

export default NavBar;
