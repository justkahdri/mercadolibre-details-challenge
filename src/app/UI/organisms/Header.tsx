import React from "react";
import {Container, Stack, HStack, Flex, Box, Image} from "@chakra-ui/react";

import logo from "../../../assets/logo.png";
import Search from "../atoms/Search";
import Point from "../atoms/Point";
import Location from "../atoms/Location";
import NavBar from "../atoms/NavBar";

const Header = () => (
  <Box bg="primary.500" boxShadow="sm" py={2}>
    <Container alignSelf="center" maxWidth="container.xl" paddingX={0}>
      <Stack spacing={3}>
        <HStack justifyContent="space-between">
          <HStack flex={1} spacing={12}>
            <Image objectFit="contain" src={logo} />
            <Search />
          </HStack>
          <Point display={{base: "none", lg: "flex"}} />
        </HStack>
        <HStack alignItems="baseline" direction="row">
          <Location />
          <NavBar />
        </HStack>
      </Stack>
    </Container>
  </Box>
);

export default Header;
