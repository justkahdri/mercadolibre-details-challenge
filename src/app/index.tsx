import React from "react";
import {Container, Stack} from "@chakra-ui/react";

import Routes from "./routes";
import NavBar from "./UI/organisms/NavBar";

const App: React.FC = () => {
  return (
    <Stack>
      <NavBar />
      <Container alignSelf="center" maxWidth="container.xl" paddingX={0}>
        <Routes />
      </Container>
    </Stack>
  );
};

export default App;
