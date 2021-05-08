import React from "react";

import {Product} from "../types";
import mock from "../mock";
import PriceCard from "../../app/UI/molecules/PriceCard";

interface Props {
  product: Product;
}

const DetailsScreen: React.FC<Props> = ({product = mock.product}) => {
  return (
    <div>
      {`<DetailsScreen /> para ${product.title}`}
      <PriceCard {...product} />
    </div>
  );
};

export default DetailsScreen;
