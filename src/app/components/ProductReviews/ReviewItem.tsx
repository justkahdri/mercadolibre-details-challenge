import React, {useState} from "react";
import {HStack, Icon, Stack, Text} from "@chakra-ui/react";
import {RiThumbUpLine, RiThumbUpFill, RiThumbDownLine, RiThumbDownFill} from "react-icons/ri";

import {Review} from "../../../product/types";

import Stars from "./Stars";

const ReviewItem = ({title, rating, content, upvotes, downvotes}: Review) => {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const handleVote = (vote: boolean) => {
    if (vote) {
      setLiked(!liked);
      if (!liked) {
        setDisliked(false);
      }
    } else {
      setDisliked(!disliked);
      if (!disliked) {
        setLiked(false);
      }
    }
  };

  return (
    <Stack color="blackAlpha.800" lineHeight="100%">
      <Stars rating={rating} size={5} />
      <Text as="h5" fontWeight={500}>
        {title}
      </Text>
      <Text>{content}</Text>
      <HStack pt={2} spacing={5}>
        <HStack>
          <Icon
            as={liked ? RiThumbUpFill : RiThumbUpLine}
            color={liked ? "secondary.500" : "inherit"}
            onClick={() => handleVote(true)}
          />
          <Text>{liked ? upvotes + 1 : upvotes}</Text>
        </HStack>
        <HStack>
          <Icon
            as={disliked ? RiThumbDownFill : RiThumbDownLine}
            color={disliked ? "secondary.500" : "inherit"}
            onClick={() => handleVote(false)}
          />
          <Text>{disliked ? downvotes + 1 : downvotes}</Text>
        </HStack>
      </HStack>
    </Stack>
  );
};

export default ReviewItem;
