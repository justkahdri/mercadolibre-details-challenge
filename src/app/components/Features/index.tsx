import {Heading, Stack, Table, Tbody, Tr, Td} from "@chakra-ui/react";
import React from "react";

type FeaturesProps = {
  features: Array<{
    id: string;
    name: string;
    value_name: string;
    values: any;
    attribute_group_id?: string;
    attribute_group_name?: string;
  }>;
};
const Features = ({features}: FeaturesProps) => {
  return (
    <Stack spacing={8}>
      <Heading as="h3" variant="thin_gray">
        Características principales
      </Heading>
      <Table variant="striped">
        <Tbody>
          {features.map((feature) => (
            <Tr key={feature.id}>
              <Td>{feature.name}</Td>
              <Td>{feature.values[0].name}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Stack>
  );
};

export default Features;
