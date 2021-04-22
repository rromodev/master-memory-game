import { Box, Flex, Link, Spacer } from '@chakra-ui/layout'
import React from 'react'
import { ColorModeSwitcher } from '../ColorModeSwitcher'

const Header = () => {
  return (
    <Flex as="nav"
    align="center"
    justify="space-between"
    wrap="wrap"
    w="100%">
      <Box ml={2} p="2">
        <Link href="/" style={{ cursor: "pointer"}} >
            Master Memory Game        
        </Link>
      
      </Box>
      
      <Spacer />
      <Flex align="flex-end" mr={2} alignItems="center">
        <Link href="https://github.com/rromodev/master-memory-game" style={{ cursor: "pointer"}}> 
            About
        </Link>          
        <ColorModeSwitcher/>
      </Flex>
    </Flex>
  )
}

export default Header
