import React from "react";
import {Button, Heading, HStack, Stack} from "@chakra-ui/react";

const FAQ = () => (
  <Stack spacing={4}>
    <Heading as="h4" color="blackAlpha.800" fontSize="lg">
      ¿Qué querés saber?
    </Heading>
    <HStack>
      <Button colorScheme="secondary" size="sm" variant="ghost">
        Costo y tiempo de envío
      </Button>
      <Button colorScheme="secondary" size="sm" variant="ghost">
        Devoluciones gratis
      </Button>
      <Button colorScheme="secondary" size="sm" variant="ghost">
        Medios de pago y promociones
      </Button>
      <Button colorScheme="secondary" size="sm" variant="ghost">
        Garantía
      </Button>
    </HStack>
  </Stack>
);

export default FAQ;
