import React from "react";
import {Flex, Link, Text} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex alignItems="center" bgColor="blackAlpha.800" color="white" direction="column" py={2}>
      <Text>
        {"Made by "}
        <Link isExternal colorScheme="primary" href="https://github.com/justkahdri">
          JustKahdri
        </Link>
        {" with 💛"}
      </Text>
      <Text color="secondary.300" fontWeight={500}>
        JustMELI is not created by, affiliated with, or supported by Mercado Libre
      </Text>
    </Flex>
  );
};

export default Footer;
