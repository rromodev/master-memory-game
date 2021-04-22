import { Box, Flex, Center, Grid, Text } from '@chakra-ui/layout'
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react"
import React from 'react'

const Game = () => {
  return (
    <Grid
    templateRows="1fr 1fr"
    >
      <Flex justifyContent="center" alignItems="center">
        <Center>
          <Text fontSize={[40,40,70,75]}>
            confidence
          </Text>
        </Center>
        
      </Flex>
      <Flex justifyContent="center" >
        <Box>
          <CircularProgress thickness="12px" value={40} color="green.400" size={[120,120,150,150]}>
            <CircularProgressLabel>40%</CircularProgressLabel>
          </CircularProgress>
        </Box>
      </Flex>
            
    </Grid>

  )
}

export default Game
