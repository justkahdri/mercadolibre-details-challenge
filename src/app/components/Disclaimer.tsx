import {CloseButton, Flex, Text, Collapse, useDisclosure} from "@chakra-ui/react";
import React from "react";

const Disclaimer = () => {
  const {isOpen, onClose} = useDisclosure({defaultIsOpen: true});

  return (
    <Collapse animateOpacity unmountOnExit in={isOpen}>
      <Flex
        alignItems="center"
        bgColor="red.500"
        color="white"
        justifyContent="space-between"
        p={2}
      >
        <Flex direction="column">
          <Text fontWeight={500}>
            This page is <u>NOT related with Mercadolibre</u> or any of its services.
          </Text>
          <Text as="i" fontSize="xs">
            Esta p&aacute;gina no est&aacute; relacionada con MercadoLibre ni ninguno de sus
            servicios
          </Text>
        </Flex>
        <CloseButton onClick={onClose} />
      </Flex>
    </Collapse>
  );
};

export default Disclaimer;
