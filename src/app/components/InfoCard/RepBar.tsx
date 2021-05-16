import React from "react";
import {Box, BoxProps} from "@chakra-ui/react";

type Props = {
  active?: boolean;
  colorScheme: string; //"red" | "orange" | "green" | "yellow" | "lightgreen"
} & BoxProps;

const RepBar = (props: Props) => {
  const {active, colorScheme, ...rest} = props;
  const [size, color] = active ? [3, `${colorScheme}.500`] : [2, `${colorScheme}.100`];

  return <Box bgColor={color} flex={1} height={size} {...rest} />;
};

export default RepBar;
