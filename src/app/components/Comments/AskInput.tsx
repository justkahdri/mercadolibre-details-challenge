import React, {MutableRefObject as MTO, useRef} from "react";
import {Button, Heading, HStack, Input, Stack, Text} from "@chakra-ui/react";

type AskInputProps = {
  handleClick: (input: MTO<"input" | null>) => void;
};

const AskInput = ({handleClick}: AskInputProps) => {
  const question = useRef(null);

  return (
    <Stack spacing={4}>
      <Heading as="h4" color="blackAlpha.800" fontSize="lg">
        Preguntale al vendedor
      </Heading>
      <HStack spacing={4}>
        <Input ref={question} fontSize="100%" placeholder="Escribí tu pregunta..." size="lg" />
        <Button colorScheme="secondary" size="lg" width="25%" onClick={() => handleClick(question)}>
          Preguntar
        </Button>
      </HStack>
      <Text as="small" color="blackAlpha.600" lineHeight="100%" size="xs">
        Tiempo aproximado de respuesta: 52 minutos
      </Text>
    </Stack>
  );
};

export default AskInput;
