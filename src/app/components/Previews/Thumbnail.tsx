import React from "react";
import {Button, Image} from "@chakra-ui/react";

import {ProductPicture} from "../../../product/types";

type ThumbnailProps = {
  handleClick: (pic: ProductPicture) => void;
  picture: ProductPicture;
};

// TODO Fix unselect when loosing focus
const Thumbnail = ({handleClick, picture}: ThumbnailProps) => (
  <Button
    borderColor="blackAlpha.200"
    borderWidth={1}
    colorScheme="secondary"
    height="50px"
    p={0.5}
    variant="minimal"
    width="50px"
    onClick={() => handleClick(picture)}
  >
    <Image height="100%" margin="auto" objectFit="contain" src={picture.url} />
  </Button>
);

export default Thumbnail;
