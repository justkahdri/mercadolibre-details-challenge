import React from "react";
import {Heading, HStack, Icon, Link, Stack, StackDivider, Text} from "@chakra-ui/react";
import {GoLocation} from "react-icons/go";
import {FaMedal} from "react-icons/fa";
import {RiChat4Line, RiTimerLine} from "react-icons/ri";

import RepBar from "./RepBar";
import SellerStat from "./SellerStat";

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
  <Stack borderRadius="lg" borderWidth={1} px={4} py={6} spacing={5}>
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
);

export default InfoCard;
