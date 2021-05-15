import React from "react";
import {HStack, StackProps, StackDivider, Link, Text} from "@chakra-ui/react";

type Props = {
  projectId: string;
} & StackProps;

const Related = (props: Props) => {
  const {projectId, ...rest} = props;

  return (
    <HStack
      fontSize="sm"
      justifyContent="flex-end"
      {...rest}
      divider={<StackDivider borderColor="gray.300" />}
    >
      <Text>
        Publicación{" "}
        <Text as="span" fontWeight={500}>
          #{projectId.slice(3)}
        </Text>
      </Text>
      <Link>Denunciar</Link>
    </HStack>
  );
};

export default Related;
