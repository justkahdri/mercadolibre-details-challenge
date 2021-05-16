import React from "react";
import {Box, Heading, HStack, Icon, Link, Stack, StackDivider, Text} from "@chakra-ui/react";
import {GoLocation} from "react-icons/go";
import {FaMedal} from "react-icons/fa";
import {RiChat4Line, RiTimerLine} from "react-icons/ri";

import RepBar from "./RepBar";
import SellerStat from "./SellerStat";
import PayMethods from "./PayMethods";

type Address = {
  city: {
    id: string;
    name: string;
  };
  state: {
    id: string;
    name: string;
  };
  country: {
    id: string;
    name: string;
  };
};

type Props = {
  address: Address & {
    search_location?: Address;
  };
};

const InfoCard = ({address}: Props) => (
  <Stack
    borderRadius="lg"
    borderWidth={1}
    divider={<StackDivider alignSelf="center" width="110%" />}
    px={4}
    py={6}
    spacing={10}
  >
    <Stack spacing={5}>
      <Heading as="h3" fontSize="lg" pb={2} variant="thin_gray">
        Información sobre el vendedor
      </Heading>

      <HStack alignItems="flex-start">
        <Icon as={GoLocation} />
        <Stack lineHeight="100%" spacing={1}>
          <Text>Ubicación</Text>
          <Text as="small" color="blackAlpha.600" fontSize="sm">
            {address.city.name}, {address.state.name}
          </Text>
        </Stack>
      </HStack>

      <HStack alignItems="flex-start" color="green.500">
        <Icon as={FaMedal} />
        <Stack lineHeight="100%" spacing={1}>
          <Text fontWeight={500}>MercadoLíder Platinum</Text>
          <Text as="small" color="blackAlpha.600" fontSize="sm">
            ¡Es uno de los mejores del sitio!
          </Text>
        </Stack>
      </HStack>

      <HStack>
        {["red", "orange", "yellow", "green", "green"].map((color, idx) => (
          <RepBar key={idx} active={idx == 4} colorScheme={color} />
        ))}
      </HStack>
      <HStack alignItems="flex-start" divider={<StackDivider />} px={4}>
        <SellerStat description="Ventas en los últimos 60 días" quantity={718} />
        <SellerStat description="Brinda buena atención" icon={RiChat4Line} />
        <SellerStat description="Despacha sus productos a tiempo" icon={RiTimerLine} />
      </HStack>

      <Link fontSize="sm">Ver más datos de este vendedor</Link>
    </Stack>

    <Stack spacing={5}>
      <Heading as="h3" fontSize="lg" pb={2} variant="thin_gray">
        Devolución gratis
      </Heading>
      <Text color="blackAlpha.600" fontSize="sm" lineHeight="normal">
        Tenés 30 días desde que recibís el producto para devolverlo. ¡No importa el motivo!
      </Text>
      <Link fontSize="sm">Conocer más sobre devoluciones</Link>
    </Stack>

    <Stack spacing={5}>
      <Heading as="h3" fontSize="lg" pb={2} variant="thin_gray">
        Garantía
      </Heading>
      <Text>Compra Protegida con Mercado Pago</Text>
      <Text color="blackAlpha.600" fontSize="sm" lineHeight="normal">
        Recibí el producto que esperabas o te devolvemos tu dinero
      </Text>
      <Link fontSize="sm">Conocer más sobre garantía</Link>
    </Stack>

    <PayMethods />
  </Stack>
);

export default InfoCard;
