import { Button } from '@chakra-ui/button'
import { Center, Grid } from '@chakra-ui/layout'
import React, { useEffect } from 'react'
import { useLocation } from 'wouter'
import useGameStore from '../utils/gameFlow'

const Home = () => {
  const [, setLocation] = useLocation()
  const gameRestart = useGameStore(state => state.gameRestart)

  useEffect(() => {
    gameRestart()
  })

  function handleClick() {
    setLocation("/game")
  }

  return (
    <Grid templateRows="1fr 1fr">        
        <Center fontSize={[40,40,50,60]} h="auto" textAlign="center">          
            Try to memorize the word in time 
        </Center>
        <Button w={200} onClick={handleClick} m="0 auto">
            GO TO GAME
        </Button>        
      </Grid>
  )
}

export default Home