import {Stack, StackDivider, Input, Icon} from "@chakra-ui/react";
import React from "react";
import {AiOutlineSearch} from "react-icons/ai";

const Search = () => (
  <Stack
    alignItems="center"
    bgColor="white"
    boxShadow="sm"
    direction="row"
    divider={<StackDivider />}
    flex={1}
    id="search-bar"
    maxW={{lg: 600}}
    padding={2}
    rounded="sm"
    width="100%"
  >
    <Input
      _placeholder={{color: "gray.400"}}
      name="search"
      placeholder="Buscar productos, marcas y más..."
      px={2}
      type="text"
      variant="unstyled"
    />
    <Icon as={AiOutlineSearch} color="gray.400" height={5} width={5} />
  </Stack>
);

export default Search;
