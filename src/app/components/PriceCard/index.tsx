import React from "react";
import {Text, Icon, Stack, HStack, Button} from "@chakra-ui/react";
import {FaShippingFast} from "react-icons/fa";
import {IoReturnDownBackOutline} from "react-icons/io5";
import {HiOutlineShieldCheck} from "react-icons/hi";
import {BiTrophy} from "react-icons/bi";

import {Product, Review} from "../../../product/types";

import ProductTitle from "./ProductTitle";
import Condition from "./Condition";
import Stars from "./Stars";

const PriceCard: React.FC<Product> = (props) => {
  const stock = props.initial_quantity - props.sold_quantity;
  // const stock = props.initial_quantity - 73;

  const reviewsQuantity = props.reviews.length;
  const reviewsRating =
    props.reviews.reduce(function (sum: number, review: Review) {
      return sum + review.rating;
    }, 0) / reviewsQuantity;

  return (
    <Stack borderRadius="lg" borderWidth={1} px={4} py={6} spacing={5}>
      <Stack id="heading">
        <Condition condition={props.condition} sold_quantity={props.sold_quantity} />
        <ProductTitle title={props.title} />
        <Stars quantity={reviewsQuantity} rating={reviewsRating} />
      </Stack>

      <Stack id="price" lineHeight="normal" spacing={0}>
        <Text fontSize="4xl" fontWeight={200}>
          {props.currency_id === "ARS" ? "$" : "U$D"} {props.price}
        </Text>
        <Text>en 12x ${Math.round((props.price * 1.7) / 12)}</Text>
        <Text color="secondary.400" fontSize="sm">
          Ver los medios de pago
        </Text>
      </Stack>

      {props.shipping.free_shipping ? (
        <Stack color="blackAlpha.600" fontSize="sm" id="shipping" lineHeight="100%">
          <HStack alignItems="center">
            <Icon as={FaShippingFast} color="green.400" height={5} width={5} />
            <Text color="green.400" fontSize="md">
              Llega gratis{" "}
              <Text as="span" fontWeight={500}>
                {new Date().getHours() < 13 ? "hoy" : "mañana"}
              </Text>
            </Text>
          </HStack>

          <Text pl="28px">Solo en CABA y zonas de GBA</Text>
          <Text pl="28px">Beneficio Mercado Puntos</Text>
          <Text color="secondary.400" pl="28px">
            Ver más formas de entrega
          </Text>
        </Stack>
      ) : (
        <Text color="blackAlpha.600">Envío pago</Text>
      )}

      <Stack color="blackAlpha.600" fontSize="sm" id="refund" lineHeight="100%">
        <HStack alignItems="center">
          <Icon as={IoReturnDownBackOutline} color="green.400" height={6} width={5} />
          <Text color="green.400" fontSize="md">
            Devolución Gratis
          </Text>
        </HStack>

        <Text pl="28px">Tenés 30 días desde que lo recibís.</Text>
        <Text color="secondary.400" pl="28px">
          Conocer más
        </Text>
      </Stack>

      {stock < 5 && (
        <Text fontSize="lg" fontWeight={500} id="stock">
          {stock == 1 ? "¡Última disponible!" : `¡Últimos ${stock} disponibles!`}{" "}
        </Text>
      )}

      <Stack id="CTA">
        <Button colorScheme="secondary" size="lg" variant="solid">
          {props.buying_mode == "buy_it_now" ? "Comprar ahora" : "Comprar"}
        </Button>
        <Button colorScheme="secondary" size="lg" variant="ghost">
          Agregar al carrito
        </Button>
      </Stack>

      <Stack
        alignItems="flex-start"
        color="blackAlpha.600"
        fontSize="sm"
        id="badges"
        lineHeight="120%"
      >
        <HStack alignItems="flex-start">
          <Icon as={HiOutlineShieldCheck} height={4} width={4} />
          <Text>
            <Text as="span" color="secondary.400">
              Compra Protegida
            </Text>
            , recibí el producto que esperabas o te devolvemos tu dinero.
          </Text>
        </HStack>
        <HStack alignItems="flex-start">
          <Icon as={BiTrophy} height={4} width={4} />
          <Text>
            <Text as="span" color="secondary.400">
              Mercado Puntos
            </Text>
            . Sumás 139 puntos.
          </Text>
        </HStack>
      </Stack>
    </Stack>
  );
};

export default PriceCard;
