import { Box, Flex, Spacer } from '@chakra-ui/layout'
import React from 'react'
import { Link } from 'wouter'
import { ColorModeSwitcher } from '../ColorModeSwitcher'

const Header = () => {
  return (
    <Flex as="nav"
    align="center"
    justify="space-between"
    wrap="wrap"
    w="100%">
      <Link href="/">
        <Box ml={2} p="2">
          Master Memory Game
        </Box>
      </Link>
      
      <Spacer />
      <Flex align="flex-end" mr={2}>
        <Link href="/about">
          <Box p="2">
            About
          </Box>
        </Link>
        
        <ColorModeSwitcher/>
      </Flex>
    </Flex>
  )
}

export default Header
