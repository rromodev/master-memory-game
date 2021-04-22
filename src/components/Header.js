import { Box, Container, Flex, Spacer } from '@chakra-ui/layout'
import React from 'react'
import { ColorModeSwitcher } from '../ColorModeSwitcher'

const Header = () => {
  return (
    <Flex as="nav"
    align="center"
    justify="space-between"
    wrap="wrap"
    w="100%">
      <Box p="2">
        Master Memory Game
      </Box>
      <Spacer />
      <Flex align="flex-end">
        <Box p="2">
          About
        </Box>
        <ColorModeSwitcher/>
      </Flex>
    </Flex>
  )
}

export default Header
