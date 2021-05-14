import React from "react";
import {
  Text,
  Stack,
  HStack,
  Select,
  FormControl,
  FormLabel,
  FormHelperText,
} from "@chakra-ui/react";

type Props = {
  stock: number;
};

const StockSelect = ({stock}: Props) => (
  <Stack id="stock" lineHeight="100%" pt={5}>
    {stock < 5 ? (
      <Text fontSize="lg" fontWeight={500}>
        {stock == 1 ? "¡Última disponible!" : `¡Últimos ${stock} disponibles!`}{" "}
      </Text>
    ) : (
      <Text fontWeight={500}>Stock disponible</Text>
    )}
    <FormControl alignItems="center" as={HStack} id="stock-select">
      <FormLabel fontWeight={400} margin={0}>
        Cantidad:
      </FormLabel>
      <Select
        defaultValue={1}
        fontWeight={500}
        iconColor="secondary.500"
        variant="unstyled"
        width="auto"
      >
        {Array(stock)
          .fill("")
          .map((_, i) => (
            <option key={i} value={i + 1}>{`${i + 1} ${i ? "unidades" : "unidad"}`}</option>
          ))}
      </Select>
      <FormHelperText fontSize="sm">
        ({stock} disponible{stock > 1 && "s"})
      </FormHelperText>
    </FormControl>
  </Stack>
);

export default StockSelect;
