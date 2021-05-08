import React from "react";
import {Container, Stack} from "@chakra-ui/react";

import Routes from "./routes";
import Header from "./UI/organisms/Header";

const App: React.FC = () => {
  return (
    <Stack>
      <Header />
      <Container alignSelf="center" maxWidth="container.xl" paddingX={0}>
        <Routes />
      </Container>
    </Stack>
  );
};

export default App;
