import React from "react";
import {HStack, Stack, StackDivider} from "@chakra-ui/react";

import mock from "../mock";
import {Product} from "../types";
import Previews from "../../app/components/Previews";
import PriceCard from "../../app/components/PriceCard";
import Features from "../../app/components/Features";
import Description from "../../app/components/Description";
import Comments from "../../app/components/Comments";

interface Props {
  product: Product;
}

const DetailsScreen: React.FC<Props> = ({product = mock.product}) => {
  return (
    <div id="details-container">
      <HStack
        alignItems="flex-start"
        bgColor="white"
        mt={2}
        p={4}
        rounded="md"
        shadow="md"
        width="100%"
      >
        <Stack flex={2}>
          <Previews pictures={product.pictures} />
          <Stack alignSelf="center" divider={<StackDivider />} spacing={10} width="90%">
            <StackDivider />
            {/* <Features features={product.attributes} /> */}
            <Description />
            <Comments />
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
