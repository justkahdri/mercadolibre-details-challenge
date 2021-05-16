import React from "react";
import {HStack, StackDivider, Link, Icon} from "@chakra-ui/react";
import {MdKeyboardArrowRight} from "react-icons/md";

const Related = () => (
  <HStack fontSize="sm" justifyContent="space-between">
    <HStack divider={<StackDivider borderColor="gray.300" />}>
      <Link variant="hover_color">Volver al listado</Link>
      <HStack
        divider={<Icon as={MdKeyboardArrowRight} color="gray.500" height={4} width={5} />}
        spacing={0}
      >
        <Link>Juegos y Juguetes</Link>
        <Link>Peluches</Link>
        <Link>Stitch</Link>
      </HStack>
    </HStack>
    <HStack divider={<StackDivider borderColor="gray.300" />}>
      <Link>Compartir</Link>
      <Link>Vender uno igual</Link>
    </HStack>
  </HStack>
);

//  TODO <StackDivider alignSelf="center" borderColor="gray.400" height="0.8rem" />

export default Related;
