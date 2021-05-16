import React, {useEffect} from "react";
import {HStack, Stack, StackDivider} from "@chakra-ui/react";

import mock from "../mock";
import {Product, Review} from "../types";
import Previews from "../../app/components/Previews";
import PriceCard from "../../app/components/PriceCard";
import Description from "../../app/components/Description";
import Comments from "../../app/components/Comments";
import ProductReviews from "../../app/components/ProductReviews";

interface Props {
  product: Product;
  reviews: Review[];
}

const DetailsScreen: React.FC<Props> = ({product = mock.product, reviews = mock.reviews}) => {
  useEffect(() => {
    document.title = `${product.title} | Mercado Libre`;

    return () => {
      document.title = "Mercado Libre";
    };
  }, [product.title]);

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
            <ProductReviews reviews={reviews} />
          </Stack>
        </Stack>
        <Stack flex={0.9}>
          <PriceCard {...product} reviews={reviews} />
        </Stack>
      </HStack>
    </div>
  );
};

export default DetailsScreen;
