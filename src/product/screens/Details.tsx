import React from "react";
import {HStack, Stack, StackDivider} from "@chakra-ui/react";

import mock from "../mock";
import Previews from "../../app/components/Previews";
import PriceCard from "../../app/components/PriceCard";
import Features from "../../app/components/Features";
import {Product} from "../types";

interface Props {
  product: Product;
}

const DetailsScreen: React.FC<Props> = ({product = mock.product}) => {
  return (
    <div id="details-container">
      <HStack bgColor="white" mt={2} p={4} rounded="md" shadow="md" width="100%">
        <Stack alignSelf="flex-start" flex={2}>
          <Previews pictures={product.pictures} />
          <Stack alignSelf="center" divider={<StackDivider />} spacing={10} width="90%">
            <StackDivider />
            <Features features={product.attributes} />
          </Stack>
        </Stack>
        <Stack flex={1}>
          <PriceCard {...product} />
        </Stack>
      </HStack>
    </div>
  );
};

export default DetailsScreen;
