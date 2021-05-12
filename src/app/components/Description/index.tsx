import React from "react";
import {Heading, Stack, Text} from "@chakra-ui/react";

const Description = () => (
  <Stack spacing={8}>
    <Heading as="h3" variant="thin_gray">
      Descripción
    </Heading>
    <Text color="blackAlpha.700" fontSize="lg" lineHeight="normal">
      PELUCHE STITCH 1 METRO - 100 CM + ENVIO GRATIS POR CORREO ARGENTINO!!! <br />
      <br />
      MATERIAL: PLUSH MUY SUAVE RELLENO DE VELLON SILICONADO <br />
      <br />
      SE PUEDE RETIRAR POR: <br />
      AV. CORRIENTES Y URUGUAY (zona tribunales - Subte B ) <br />
      AV. CORRIENTES Y CARLOS PELLEGRINI (Subte B) <br />
      AV. CORRIENTES Y ALEM (Subte B) <br />
      VILLA PUEYRREDON <br />
      VILLA BALLESTER
      <br />
      <br />
      REALIZAMOS ENVÍOS A TODO EL PAÍS Y HACEMOS ENVÍOS A DOMICILIO POR MOTOMENSAJERÍA. <br />
      <br />
      *****NO SE OLVIDE DE VISITAR TODOS NUESTROS PRODUCTOS*****
    </Text>
  </Stack>
);

export default Description;
