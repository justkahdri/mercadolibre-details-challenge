import React, {ReactNode} from "react";
import {Stack, Text, StackProps, Icon} from "@chakra-ui/react";
import {MdKeyboardArrowDown} from "react-icons/md";

const NavBar = (props: StackProps) => {
  const options: ReactNode[] = [
    <>
      Categorias <Icon as={MdKeyboardArrowDown} />
    </>,
    "Ofertas",
    "Historial",
    "Supermercado",
    "Moda",
    "Vender",
    "Ayuda",
  ];

  return (
    <Stack
      alignItems="flex-end"
      color="blackAlpha.700"
      direction="row"
      fontSize="sm"
      height={"100%"}
      lineHeight="normal"
      spacing={4}
      {...props}
    >
      {options.map((option, idx) => (
        <Text key={idx}>{option}</Text>
      ))}
    </Stack>
  );
};

export default NavBar;
