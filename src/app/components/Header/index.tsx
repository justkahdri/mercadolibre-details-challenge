import React from "react";
import {
  Container,
  Stack,
  HStack,
  Box,
  Image,
  useBreakpointValue,
  useDisclosure,
  Icon,
  StackDivider,
} from "@chakra-ui/react";
import {MdMenu} from "react-icons/md";

import logo from "../../../assets/logo.png";
import iso from "../../../assets/isologo.png";
import MobileMenu from "../MobileMenu";

import Search from "./Search";
import Point from "./Point";
import Location from "./Location";
import NavBar from "./NavBar";
import UserUtils from "./UserUtils";
import Cart from "./Cart";

const Header = () => {
  const isMobile = useBreakpointValue({base: true, md: false});
  const {isOpen, onToggle} = useDisclosure();

  if (isMobile)
    return (
      <Stack bg="primary.500" boxShadow="sm" py={2} width="100vw">
        <HStack>
          <Image height="40px" objectFit="contain" src={iso} />
          <Search />
          <Icon as={MdMenu} cursor="pointer" onClick={onToggle} />
          <Cart />
        </HStack>
        {isOpen ? <MobileMenu /> : <Location isMobile />}
      </Stack>
    );

  return (
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
};

export default Header;
