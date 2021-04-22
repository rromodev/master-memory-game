import { Flex, Center, Grid, Text } from '@chakra-ui/layout'
import { Button, FormControl, FormHelperText, FormLabel, Input } from "@chakra-ui/react"
import React, { useRef, useState } from 'react'
import useGameStore from '../utils/gameFlow'
import gameConstants from '../utils/constants'

const ScoreLayout = () => {
  const level = useGameStore(state => state.level)
  const points = useGameStore(state => state.points)
  const strikes = useGameStore(state => state.strikes)

  return (
    <Flex justifyContent="center" alignItems="center">
      <Center>
        <Text fontSize={40}>
          Level: {level} - Points in Level: {points} - Strikes: {strikes}
        </Text>
      </Center>
      
    </Flex>
  )
}

const Game = () => {
  const status = useGameStore(state => state.gameStatus)
  const start = useGameStore(state => state.gameStart)
  const word = useGameStore(state => state.word)
  const gameInput = useGameStore(state => state.gameInput)
  const timeToShow = useGameStore(state => state.getTimeToShow)
  const gameValidate = useGameStore(state => state.gameValidate)
  const gameRestart = useGameStore(state => state.gameRestart)
  const inputRef = useRef()
  const [input, setInput] = useState('')
  
  function handleStart() {
    start()
  }

  function handleSubmit(event) {
    event.preventDefault()
    gameValidate(inputRef.current.value)
    setInput('')
  }

  function handleInput() {
    setInput(inputRef.current.value)
  }

  function handleRestart() {
    gameRestart()
  }

  if (status === gameConstants.IDLE) {
    return (
      <Grid templateRows="1fr 1fr">
        <Center fontSize={[40,40,70,75]}>
          Are you ready... 
        </Center>      
        <Button onClick={handleStart} w={200} m="0 auto">START</Button>
      </Grid>
    )
  }

  if (status === gameConstants.STARTED) {
    
    setTimeout(() => {
      gameInput()
    }, timeToShow())

    return (
      <Grid templateRows="100px 1fr">
        <ScoreLayout/>
        <Flex justifyContent="center" alignItems="center">
          <Center>
            <Text fontSize={[40,40,70,75]}>
              {word}
            </Text>
          </Center>
          
        </Flex>
      </Grid>
  
    )
  }  

  if (status === gameConstants.WORD_INPUT) {
    return (
      <Grid templateRows="100px 1fr">
        <ScoreLayout />
        <Flex alignItems="center" justify="center">
          <form onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel>Write the word:</FormLabel>
              <Input w={500} autoFocus ref={inputRef} value={input} onChange={handleInput}/>
              <FormHelperText>You can do it!</FormHelperText>
              <Button
                mt={4}
                colorScheme="teal"
                type="submit"
                alignItems="center"
              >Submit</Button>
            </FormControl>
          </form>
        </Flex>            
      </Grid>
    )
  }

  if (status === gameConstants.LOSE) {
    return (
      <Grid templateRows="100px 1fr">
        <ScoreLayout/>
        <Flex direction="column" justifyContent="center" alignItems="center">
          {/* <Center> */}
            <Text fontSize={[40,40,70,75]}>
              GAME OVER
            </Text>
            <Text fontSize={[20,20,40,40]}>
              Last word was: {word}
            </Text>
          {/* </Center> */}
          <Button onClick={handleRestart} w={200} m="0 auto">RESTART</Button>
        </Flex>
      </Grid>
    )
  }

  if (status === gameConstants.WON) {
    return (
      <Grid templateRows="1fr 1fr">
        <Center fontSize={[40,40,70,75]}>
          You win!!.. 
        </Center>      
        <Button onClick={handleRestart} w={200} m="0 auto">RESTART</Button>
      </Grid>
    )
  }
}

export default Game
