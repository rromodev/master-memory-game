import React from 'react';
import {
  ChakraProvider,
  theme,
  Grid,
} from '@chakra-ui/react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Switch } from 'wouter';
import Home from './components/Home';
import Game from './components/Game';
import About from './components/About';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Grid
      h="100vh"
      templateRows="85px auto 85px"
      w={["100%", "80%"]}
      maxW={{ xl: "960px" }}
      m="0 auto"
      >
        <Header />
        <Switch>
          <Route path="/game" component={Game} />
          <Route path="/about" component={About} />
          <Route path="/" component={Home} />
        </Switch>
        <Footer />
      </Grid>
    </ChakraProvider>
  );
}

export default App;
