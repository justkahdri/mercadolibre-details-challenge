import React from "react";
import {Button, Image} from "@chakra-ui/react";

import {ProductPicture} from "../../../product/types";

type ThumbnailProps = {
  handleClick: (pic: ProductPicture) => void;
  picture: ProductPicture;
  active: string;
};

const Thumbnail = ({handleClick, picture, active}: ThumbnailProps) => (
  <Button
    borderColor="blackAlpha.200"
    borderWidth={1}
    colorScheme="secondary"
    height="50px"
    p={0.5}
    title={active === picture.id ? "Selected thumbnail" : `Thumbnail ${picture.id}`}
    variant={active === picture.id ? "minimal" : "unstyled"}
    width="50px"
    onClick={() => handleClick(picture)}
  >
    <Image height="100%" margin="auto" objectFit="contain" src={picture.url} />
  </Button>
);

export default Thumbnail;
