import React from "react";
import {Container, Stack} from "@chakra-ui/react";

import Routes from "./routes";
import Header from "./components/Header";
import Disclaimer from "./components/Disclaimer";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <>
      <Disclaimer />
      <Stack bgColor="blackAlpha.200">
        <Header />
        <Container alignSelf="center" maxWidth="container.xl" paddingX={0}>
          <Routes />
        </Container>
      </Stack>
      <Footer />
    </>
  );
};

export default App;
