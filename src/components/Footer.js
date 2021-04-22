import { Box, Flex } from '@chakra-ui/layout'
import React from 'react'
import GithubIcon from '../assets/GithubIcon'

const Footer = () => {
  return (
    <Flex as="nav"
    align="center"
    justify="space-between"
    wrap="wrap"
    w='40px'>
      <Box w='30px'>
        <GithubIcon />
      </Box>
      
    </Flex>
  )
}

export default Footer
