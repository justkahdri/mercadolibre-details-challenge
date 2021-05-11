import React from "react";
import {Flex, Stack, Image} from "@chakra-ui/react";

import {ProductPicture} from "../../../product/types";

import Thumbnail from "./Thumbnail";

type PreviewsProps = {
  pictures: ProductPicture[];
};

const Previews = ({pictures}: PreviewsProps) => {
  const [currentPicture, setCurrentPicture] = React.useState(pictures[0]);

  return (
    <Flex height="500px" mb={10}>
      <Stack>
        {pictures.map((pic) => (
          <Thumbnail
            key={pic.id}
            active={currentPicture.id}
            handleClick={setCurrentPicture}
            picture={pic}
          />
        ))}
      </Stack>
      <Image margin="auto" objectFit="contain" src={currentPicture.url} />
    </Flex>
  );
};

export default Previews;
