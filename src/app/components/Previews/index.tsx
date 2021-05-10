import {Button} from "@chakra-ui/button";
import {Image} from "@chakra-ui/image";
import {Flex, Stack} from "@chakra-ui/layout";
import React from "react";

import {ProductPicture} from "../../../product/types";

type PreviewsProps = {
  pictures: ProductPicture[];
};
const Previews = ({pictures}: PreviewsProps) => {
  const [currentPicture, setCurrentPicture] = React.useState(pictures[0]);

  return (
    <Flex height="500px" mb={68}>
      <Stack>
        {pictures.map((pic) => (
          <Button
            key={pic.id}
            borderColor="blackAlpha.200"
            borderWidth={1}
            height="50px"
            p={0.5}
            variant="unstyled"
            width="50px"
            onClick={() => setCurrentPicture(pic)}
          >
            <Image height="100%" margin="auto" objectFit="contain" src={pic.url} />
          </Button>
        ))}
      </Stack>
      <Image margin="auto" objectFit="contain" src={currentPicture.url} />
    </Flex>
  );
};

export default Previews;
