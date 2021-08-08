import React from "react";
import {Text, Stack, Button, Tooltip} from "@chakra-ui/react";

import {Product, Review} from "../../../product/types";

import ProductTitle from "./ProductTitle";
import Shipping from "./Shipping";
import Refund from "./Refund";
import StockSelect from "./StockSelect";
import Badges from "./Badges";

const PriceCard: React.FC<Product> = (props) => {
  const stock = props.initial_quantity - props.sold_quantity;

  const reviewsQuantity = props.reviews.length;
  const reviewsRating =
    props.reviews.reduce(function (sum: number, review: Review) {
      return sum + review.rating;
    }, 0) / reviewsQuantity;

  return (
    <Stack borderRadius="lg" borderWidth={1} px={4} py={6} spacing={5}>
      <ProductTitle
        condition={props.condition}
        reviews_quantity={reviewsQuantity}
        reviews_rating={reviewsRating}
        sold_quantity={props.sold_quantity}
        title={props.title}
      />

      <Stack id="price" lineHeight="normal" spacing={0}>
        <Text fontSize="4xl" fontWeight={200}>
          {props.currency_id === "ARS" ? "$" : "U$D"} {props.price.toLocaleString("es-AR")}
        </Text>
        <Text>en 12x ${Math.round((props.price * 1.7) / 12)}</Text>
        <Text color="secondary.400" fontSize="sm">
          Ver los medios de pago
        </Text>
      </Stack>

      {props.shipping.free_shipping ? <Shipping /> : <Text color="blackAlpha.600">Envío pago</Text>}

      <Refund />

      <StockSelect stock={stock} />

      <Stack id="CTA">
        <Tooltip hasArrow bg="red.500" closeOnClick={false} label="No es un bot&oacute;n real">
          <Button colorScheme="secondary" size="lg" variant="solid">
            {props.buying_mode == "buy_it_now" ? "Comprar ahora" : "Comprar"}
          </Button>
        </Tooltip>
        <Tooltip hasArrow bg="red.500" closeOnClick={false} label="Este tampoco">
          <Button colorScheme="secondary" size="lg" variant="ghost">
            Agregar al carrito
          </Button>
        </Tooltip>
      </Stack>

      <Badges />
    </Stack>
  );
};

export default PriceCard;
