import { Box, Center, Flex } from '@chakra-ui/layout'
import React from 'react'
import GithubIcon from '../assets/GithubIcon'

const Footer = () => {
  return (
    <Flex
    direction="column"
    justify="center"
    align="center"
    wrap="wrap">
      <Center>
        <Box w={30}>
          <GithubIcon />
        </Box>
      </Center>
      
    </Flex>
  )
}

export default Footer
