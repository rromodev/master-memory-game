import { Box, Center, Flex, Link } from '@chakra-ui/layout'
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
          <Link href="https://github.com/rromodev/master-memory-game" style={{ cursor: "pointer"}} ml={2} p="2">
            <GithubIcon />
          </Link>
        </Box>
      </Center>
      
    </Flex>
  )
}

export default Footer
