import React from "react";
import {HStack, Link, Text, Icon} from "@chakra-ui/react";
import {VscDash} from "react-icons/vsc";

const Categories = () => (
  <HStack fontSize="sm">
    <Text fontWeight={500}>También puede interesarte:</Text>
    <HStack divider={<Icon as={VscDash} />} spacing={1}>
      <Link variant="unstyled">trendy dogs</Link>
      <Link variant="unstyled">peluche stitch</Link>
      <Link variant="unstyled">peluches gigantes</Link>
      <Link variant="unstyled">peluches</Link>
    </HStack>
  </HStack>
);

export default Categories;
