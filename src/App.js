import React from 'react';
import {
  ChakraProvider,
  theme,
  Flex,
} from '@chakra-ui/react';
import Header from './components/Header';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Flex
      direction="column"
      align="center"
      maxW={{ xl: "960px" }}
      m="0 auto"
      >
        <Header />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
