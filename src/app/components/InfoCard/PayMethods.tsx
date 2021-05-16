import React from "react";
import {HStack, Icon, Stack, Text, Heading, Link} from "@chakra-ui/react";
import {FaCcMastercard} from "react-icons/fa";
import {RiMastercardLine} from "react-icons/ri";
import {IoCashOutline} from "react-icons/io5";
import {SiVisa, SiAmericanexpress, SiMastercard, SiCashapp} from "react-icons/si";

type PayMethodProps = {
  title: string;
  description?: string;
  icons: any[];
};

const PayMethod = (props: PayMethodProps) => (
  <Stack spacing={1}>
    <Text>{props.title}</Text>
    {props.description && (
      <Text color="blackAlpha.600" fontSize="sm" lineHeight="normal">
        {props.description}
      </Text>
    )}
    <HStack spacing={4}>
      {props.icons.map((icon, idx) => (
        <Icon key={idx} as={icon} color="secondary.700" height={7} width={7} />
      ))}
    </HStack>
  </Stack>
);

const PayMethods = () => {
  const methods = [
    {
      title: "Tarjetas de crédito con Mercado Pago",
      description: "¡Cuotas sin interés con bancos seleccionados!",
      icons: [SiVisa, FaCcMastercard, SiAmericanexpress],
    },
    {title: "Tarjetas de débito", icons: [SiVisa, SiMastercard, RiMastercardLine]},
    {title: "Efectivo", icons: [IoCashOutline, SiCashapp]},
  ];

  return (
    <Stack spacing={5}>
      <Heading as="h3" fontSize="lg" pb={2} variant="thin_gray">
        Medios de pago
      </Heading>
      {methods.map((method, idx) => (
        <PayMethod key={idx} {...method} />
      ))}
      <Link fontSize="sm">Conocé otros medios de pago</Link>
    </Stack>
  );
};

export default PayMethods;
