import React from "react";
import {Flex, Link, Text} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex bgColor="blackAlpha.800" color="white" justifyContent="center" py={2}>
      <Text>
        {"Made by "}
        <Link isExternal colorScheme="primary" href="https://github.com/justkahdri">
          JustKahdri
        </Link>
        {" with 💛"}
      </Text>
    </Flex>
  );
};

export default Footer;
