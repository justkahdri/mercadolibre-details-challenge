import React from "react";
import {Flex, HStack, Icon, Stack, Text} from "@chakra-ui/react";
import {GoLocation} from "react-icons/go";
import {IoIosArrowForward} from "react-icons/io";

interface LocationProps {
  isMobile?: boolean;
}

const Location = ({isMobile = false}: LocationProps) =>
  isMobile ? (
    <Flex
      alignItems="center"
      borderTop="solid 1px rgba(0,0,0,0.1)"
      justifyContent="space-between"
      p={2}
      pb={0}
    >
      <HStack textAlign="left" width="100%">
        <Icon as={GoLocation} color="blackAlpha.800" />
        <Text color="blackAlpha.700" fontSize="sm">
          Enviar a Buenos Aires 1200
        </Text>
      </HStack>
      <Icon alignSelf="flex-end" as={IoIosArrowForward} color="blackAlpha.700" />
    </Flex>
  ) : (
    <HStack alignItems="center" p={2} spacing={1} textAlign="left">
      <Icon as={GoLocation} color="blackAlpha.800" height={"100%"} width={5} />
      <Stack spacing={0}>
        <Text color="blackAlpha.600" fontSize="smaller" lineHeight="90%">
          Enviar a
        </Text>
        <Text color="blackAlpha.800" fontSize="sm" lineHeight="90%">
          Buenos Aires 1200
        </Text>
      </Stack>
    </HStack>
  );

export default Location;
