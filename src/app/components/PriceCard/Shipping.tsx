import React, {useState, useEffect} from "react";
import {Stack, Text, Icon, HStack} from "@chakra-ui/react";
import {FaShippingFast} from "react-icons/fa";

const Shipping = () => {
  const [shippingTime, setShippingTime] = useState("mañana");

  useEffect(() => {
    let today = new Date();

    if (today.getDay() <= 6 && today.getHours() < 13) {
      setShippingTime("hoy"); // Dia de semana antes del mediodia
    } else if (today.getDay() <= 5) {
      setShippingTime("mañana"); // Dia de semana despues del mediodia
    } else {
      setShippingTime("el lunes"); // Viernes despues del mediodia y fin de semana
    }
  }, []);

  return (
    <Stack color="blackAlpha.600" fontSize="sm" id="shipping" lineHeight="100%">
      <HStack alignItems="center">
        <Icon as={FaShippingFast} color="green.400" height={5} width={5} />
        <Text color="green.400" fontSize="md">
          Llega gratis{" "}
          <Text as="span" fontWeight={500}>
            {shippingTime}
          </Text>
        </Text>
      </HStack>

      <Text pl="28px">Solo en CABA y zonas de GBA</Text>
      <Text pl="28px">Beneficio Mercado Puntos</Text>
      <Text color="secondary.400" pl="28px">
        Ver más formas de entrega
      </Text>
    </Stack>
  );
};

export default Shipping;
